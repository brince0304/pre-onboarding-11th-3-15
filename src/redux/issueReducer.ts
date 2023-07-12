import { IIssue } from '../interfaces/IIssue';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IssueState {
  page: number;
  issues: IIssue;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  hasMore: boolean;
}

export const initialState = {
  page: 1,
  issues: [] as IIssue,
  loading: 'idle',
  error: null,
  hasMore: true,
} as IssueState;

export const getIssues = createAsyncThunk(
  'issues/getIssues',

  async (getIssues: (page: number) => Promise<IIssue>, { getState }) => {
    const state = getState() as RootState;
    return await getIssues(state.issueReducer.page);
  },
  {
    condition: (props, { getState }) => {
      const state = getState() as RootState;
      return (
        (state.issueReducer.loading === 'idle' || state.issueReducer.loading === 'succeeded') &&
        state.issueReducer.hasMore
      );
    },
  },
);

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
    builder.addCase(getIssues.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.issues = state.issues.concat(action.payload);
      state.page += 1;
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(getIssues.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message as string;
      state.hasMore = false;
    });
  },
});

export const { reset, setPage, setIssues, setError } = issueReducer.actions;
