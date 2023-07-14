import { useAppDispatch } from 'redux/store';
import { IIssueChild, IIssues } from '../interfaces/IIssues';
import {
  getIssueByIssueNumberAction,
  getIssueByIssueNumberThunk,
  getIssuesByPageThunk,
  reset,
  setError,
} from '../redux/issueReducer';
import { useIssues } from 'context/IssueContext';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

function useIssueAction(): IIssueContextReturn {
  const { getIssuesByPage, getIssueByIssueNumber } = useIssues();
  const issueState = useSelector((state: RootState) => state.issueReducer);

  const dispatch = useAppDispatch();
  const { loading, error, issues, page, hasMore } = issueState;

  const handleResetPage = async () => {
    dispatch(reset());
    await handleGetIssuesByPage();
  };

  const handleGetIssuesByPage = async () => {
    try {
      await dispatch(getIssuesByPageThunk(getIssuesByPage)).unwrap();
    } catch (e) {
      dispatch(setError(e));
    }
  };
  const handleDispatchGetIssueByIssueNumber = async (id: number) => {
    try {
      await dispatch(
        getIssueByIssueNumberThunk({
          getIssueByIssueNumber: getIssueByIssueNumber,
          issueNumber: id,
        }),
      ).unwrap();
    } catch (e) {
      dispatch(setError(e));
    }
  };

  const handleRefreshCurrentPost = async (id: number) => {
    await handleDispatchGetIssueByIssueNumber(id);
    return dispatch(getIssueByIssueNumberAction(id));
  };

  const handleGetIssueByIssueNumber = async (id: number) => {
    const issue = await dispatch(getIssueByIssueNumberAction(id));
    if (issue) {
      return issue;
    } else {
      await handleDispatchGetIssueByIssueNumber(id);
      return dispatch(getIssueByIssueNumberAction(id));
    }
  };

  return {
    loading,
    error,
    issues,
    page,
    hasMore,
    handleGetIssues: handleGetIssuesByPage,
    handleResetPage,
    handleGetIssueByIssueNumber: handleGetIssueByIssueNumber,
    handleRefreshCurrentPost: handleRefreshCurrentPost,
  };
}

interface IIssueContextReturn {
  loading: string;
  error: string | null;
  issues: IIssues;
  page: number;
  hasMore: boolean;
  handleGetIssues: () => void;
  handleResetPage: () => void;
  handleGetIssueByIssueNumber: (id: number) => Promise<IIssueChild | undefined>;
  handleRefreshCurrentPost: (id: number) => Promise<IIssueChild | undefined>;
}

export default useIssueAction;
