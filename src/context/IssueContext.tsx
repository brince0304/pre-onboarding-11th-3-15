import { IIssue } from '../interfaces/IIssue';
import { createContext, ReactNode, useContext } from 'react';
import { IGithubService } from '../services/githubService';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { getIssues, setPage } from '../redux/issueReducer';

const IssueContext = createContext<IIssueContextReturn>({} as IIssueContextReturn);
export const useIssues = () => useContext(IssueContext);

const IssueProvider = ({ children, issueService }: { children: ReactNode; issueService: IGithubService }) => {
  const getIssuesByPage = issueService.getIssuesByPage.bind(issueService);
  const issueState = useSelector((state: RootState) => state.issueReducer);
  const dispatch = useAppDispatch();
  const { loading, error, issues, page, hasMore } = issueState;
  const handleUpPage = () => {
    dispatch(setPage(page + 1));
  };
  const handleGetIssues = async () => {
    dispatch(
      getIssues({
        page: page,
        getIssuesByPage: getIssuesByPage,
      }),
    );
  };

  return (
    <IssueContext.Provider
      value={{
        handleGetIssues,
        loading,
        error,
        issues,
        page,
        hasMore,
        handleUpPage,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

interface IIssueContextReturn {
  handleGetIssues: () => void;
  loading?: string;
  error?: string | null;
  issues?: IIssue;
  page?: number;
  hasMore?: boolean;
  handleUpPage?: () => void;
}

export { IssueContext, IssueProvider };
