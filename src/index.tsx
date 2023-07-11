import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IssueProvider } from './context/IssueContext';
import { GithubService } from './services/githubService';
import { HttpClient } from './client/httpClient';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const baseUrl = 'https://api.github.com/';
const apiKey = process.env.REACT_APP_GITHUB_API_KEY as string;
const owner = process.env.REACT_APP_GITHUB_OWNER as string;
const repo = process.env.REACT_APP_GITHUB_REPO as string;
const httpClient = new HttpClient(baseUrl, apiKey);
const issueService = new GithubService(httpClient, owner, repo);
root.render(
  <IssueProvider issueService={issueService}>
    <Provider store={store}>
      <App />
    </Provider>
  </IssueProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
