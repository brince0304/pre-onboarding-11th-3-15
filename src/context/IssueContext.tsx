import { IIssues, IIssueChild } from '../interfaces/IIssues';
import { createContext, ReactNode, useContext } from 'react';
import { IGithubService } from '../services/githubService';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import {
  getIssueByIssueNumberAction,
  getIssueByIssueNumberThunk,
  getIssuesByPageThunk,
  reset,
  setError,
} from '../redux/issueReducer';

const IssueContext = createContext<IIssueContextReturn>({} as IIssueContextReturn);
export const useIssues = () => useContext(IssueContext);
const IssueProvider = ({ children, issueService }: { children: ReactNode; issueService: IGithubService }) => {
  const getIssuesByPage = issueService.getIssuesByPage.bind(issueService);
  const getIssueByIssueNumber = issueService.getIssueByIssueNumber.bind(issueService);
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

  return (
    <IssueContext.Provider
      value={{
        handleGetIssues: handleGetIssuesByPage,
        loading,
        error,
        issues,
        page,
        hasMore,
        handleResetPage,
        handleGetIssueByIssueNumber: handleGetIssueByIssueNumber,
        handleRefreshCurrentPost: handleRefreshCurrentPost,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

interface IIssueContextReturn {
  handleGetIssues: () => void;
  loading: string;
  error: string | null;
  issues: IIssues;
  page: number;
  hasMore: boolean;
  handleResetPage: () => void;
  handleGetIssueByIssueNumber: (id: number) => Promise<IIssueChild | undefined>;
  handleRefreshCurrentPost: (id: number) => Promise<IIssueChild | undefined>;
}

export { IssueContext, IssueProvider };
