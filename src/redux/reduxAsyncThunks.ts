import {createAsyncThunk} from "@reduxjs/toolkit";
import {IIssueChild, IIssues} from "../interfaces/IIssues";
import {RootState} from "./store";

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
                state.issueReducer.loading === 'idle' ||
                state.issueReducer.loading === 'succeeded' ||
                state.issueReducer.loading === 'failed');
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
