import { IIssue } from '../interfaces/IIssue';
import { createContext, ReactNode, useContext } from 'react';
import { IGithubService } from '../services/githubService';

const IssueContext = createContext<IIssueContextReturn>({} as IIssueContextReturn);
export const useIssues = () => useContext(IssueContext);

const IssueProvider = ({ children, issueService }: { children: ReactNode; issueService: IGithubService }) => {
  const getIssuesByPage = issueService.getIssuesByPage.bind(issueService);
  return <IssueContext.Provider value={{ getIssuesByPage }}>{children}</IssueContext.Provider>;
};

interface IIssueContextReturn {
  getIssuesByPage: (page: number) => Promise<IIssue[]>;
}

export { IssueContext, IssueProvider };
