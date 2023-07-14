import {RootState} from "./store";

export const getIssueByIssueNumberAction = (issueNumber: number) => {
    return async (dispatch: any, getState: any) => {
        const state = getState() as RootState;
        const findIssue = state.issueReducer.issues.find((issue) => issue.number === issueNumber);
        if (findIssue) {
            return findIssue;
        }
    };
};
