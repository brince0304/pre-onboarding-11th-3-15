import { IIssues, IIssueChild } from '../interfaces/IIssues';
import { IHttpClient } from '../client/httpClient';

export interface IGithubService {
  getIssuesByPage(page: number): Promise<IIssues>;
  getIssueByIssueNumber(issueNumber: number): Promise<IIssueChild>;
}

export class GithubService implements IGithubService {
  httpClient: IHttpClient;
  owner: string;
  repo: string;
  constructor(httpClient: IHttpClient, owner: string, repo: string) {
    this.httpClient = httpClient;
    this.owner = owner;
    this.repo = repo;
  }
  getIssuesURL(page: number): string {
    return getIssuesURL
      .replace('{owner}', this.owner)
      .replace('{repo}', this.repo)
      .replace('{page}', page + '');
  }
  getIssueURL = (issueNumber: number): string => {
    return getIssueURL
      .replace('{owner}', this.owner)
      .replace('{repo}', this.repo)
      .replace('{issue_number}', issueNumber + '');
  };
  async getIssuesByPage(page: number): Promise<IIssues> {
    return await this.httpClient.get(this.getIssuesURL(page));
  }
  async getIssueByIssueNumber(issueNumber: number): Promise<IIssueChild> {
    return await this.httpClient.get(this.getIssueURL(issueNumber));
  }
}

const getIssuesURL = '/repos/{owner}/{repo}/issues?sort=comments&state=open&per_page=10&page={page}';
const getIssueURL = '/repos/{owner}/{repo}/issues/{issue_number}';
