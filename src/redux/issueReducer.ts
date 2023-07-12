import { IIssues, IIssueChild } from '../interfaces/IIssues';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IssueState {
  page: number;
  issues: IIssues;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  hasMore: boolean;
}

export const initialState = {
  page: 1,
  issues: [] as IIssues,
  loading: 'idle',
  error: null,
  hasMore: true,
} as IssueState;

export const getIssuesByPageThunk = createAsyncThunk(
  'issues/getIssues',

  async (getIssues: (page: number) => Promise<IIssues>, { getState }) => {
    const state = getState() as RootState;
    return await getIssues(state.issueReducer.page);
  },
  {
    condition: (arg, { getState }) => {
      const state = getState() as RootState;
      return (
        (state.issueReducer.loading === 'idle' || state.issueReducer.loading === 'succeeded') &&
        state.issueReducer.hasMore
      );
    },
  },
);

export const getIssueByIssueNumberThunk = createAsyncThunk(
  'issues/getIssueByIssueNumber',
  async (arg: { getIssueByIssueNumber: (issueNumber: number) => Promise<IIssueChild>; issueNumber: number }) => {
    return await arg.getIssueByIssueNumber(arg.issueNumber);
  },
  {
    condition: (arg, { getState }) => {
      const state = getState() as RootState;
      return state.issueReducer.loading === 'idle' || state.issueReducer.loading === 'succeeded';
    },
    dispatchConditionRejection: true,
  },
);

export const getIssueByIssueNumberAction = (issueNumber: number) => {
  return async (dispatch: any, getState: any) => {
    const state = getState() as RootState;
    const findIssue = state.issueReducer.issues.find((issue) => issue.number === issueNumber);
    if (findIssue) {
      return findIssue;
    }
  };
};

export const issueReducer = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    reset: (state) => {
      state.page = 1;
      state.issues = [];
      state.loading = 'idle';
      state.error = null;
      state.hasMore = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setIssues: (state, action) => {
      state.issues = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIssuesByPageThunk.pending, (state) => {
      state.loading = 'pending';
      if (state.issues.length === 1) {
        state.issues = [];
      }
    });
    builder.addCase(getIssuesByPageThunk.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.issues = state.issues.concat(action.payload);
      state.issues = state.issues.sort((a, b) => b.comments - a.comments);
      state.page += 1;
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(getIssuesByPageThunk.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message as string;
      state.hasMore = false;
    });
    builder.addCase(getIssueByIssueNumberThunk.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getIssueByIssueNumberThunk.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.issues = state.issues.concat(action.payload);
    });
    builder.addCase(getIssueByIssueNumberThunk.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message as string;
    });
  },
});

export const { reset, setPage, setIssues, setError } = issueReducer.actions;
