import { IIssues, IIssueChild } from '../interfaces/IIssues';
import { IHttpClient } from '../client/httpClient';
import {getIssuesURL, getIssueURL} from "../utils";

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

  async getIssuesByPage(page: number): Promise<IIssues> {
    return await this.httpClient.get(getIssuesURL(page,this.owner,this.repo));
  }
  async getIssueByIssueNumber(issueNumber: number): Promise<IIssueChild> {
    return await this.httpClient.get(getIssueURL(issueNumber,this.owner,this.repo));
  }
}


