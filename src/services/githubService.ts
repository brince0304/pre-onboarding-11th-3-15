import { IIssue } from '../interfaces/IIssue';
import { IHttpClient } from '../client/httpClient';

export interface IGithubService {
  getIssuesByPage(page: number): Promise<IIssue[]>;
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
    return getIssuesURL.replace('{owner}', this.owner).replace('{repo}', this.repo).replace('{page}', page.toString());
  }
  async getIssuesByPage(page: number): Promise<IIssue[]> {
    return await this.httpClient.get(this.getIssuesURL(page));
  }
}

const getIssuesURL = '/repos/{owner}/{repo}/issues?sort=comments&state=open&per_page=10&page={page}';
