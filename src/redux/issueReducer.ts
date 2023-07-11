import { IIssue } from '../interfaces/IIssue';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

  async (props: { getIssuesByPage: (page: number) => Promise<IIssue>; page: number }) => {
    return await props.getIssuesByPage(props.page);
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
  },
  extraReducers: (builder) => {
    builder.addCase(getIssues.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.issues = state.issues.concat(action.payload);
      state.page = state.page + 1;
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(getIssues.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message as string;
    });
  },
});

export const { reset, setPage, setIssues } = issueReducer.actions;
