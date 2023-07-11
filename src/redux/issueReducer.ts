import { IIssue } from '../interfaces/IIssue';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useIssues } from '../context/IssueContext';

interface IssueState {
  page: number;
  issues: IIssue[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  hasMore: boolean;
}

const initialState = {
  page: 1,
  issues: [] as IIssue[],
  loading: 'idle',
  error: null,
  hasMore: true,
} as IssueState;

export const getIssuesByPage = createAsyncThunk('issue/getIssues', async (page: number, thunkAPI) => {
  const { getIssuesByPage } = useIssues();
  return await getIssuesByPage(page);
});

export const issueReducer = createSlice({
  name: 'issue',
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
  extraReducers: {
    [getIssuesByPage.pending.type]: (state, action) => {
      state.loading = 'pending';
    },
    [getIssuesByPage.fulfilled.type]: (state, action) => {
      state.loading = 'succeeded';
      state.issues = state.issues.concat(action.payload);
      state.page = state.page + 1;
      state.hasMore = action.payload.length > 0;
    },
    [getIssuesByPage.rejected.type]: (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { reset, setPage, setIssues } = issueReducer.actions;
