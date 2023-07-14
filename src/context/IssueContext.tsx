import { createContext, ReactNode, useContext } from 'react';
import { IGithubService } from '../services/githubService';

const IssueContext = createContext<IGithubService>({} as IGithubService);
export const useIssues = () => useContext(IssueContext);
const IssueProvider = ({ children, issueService }: { children: ReactNode; issueService: IGithubService }) => {
  const getIssuesByPage = issueService.getIssuesByPage.bind(issueService);
  const getIssueByIssueNumber = issueService.getIssueByIssueNumber.bind(issueService);

  return (
    <IssueContext.Provider
      value={{
        getIssuesByPage,
        getIssueByIssueNumber,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

export { IssueContext, IssueProvider };
