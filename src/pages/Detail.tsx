import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IIssueChild } from '../interfaces/IIssues';
import Header from '../components/common/Header';
import IssueLoading from '../components/IssueDetails/IssueLoading';
import IssueDetails from '../components/IssueDetails/IssueDetails';
import IssueError from '../components/IssueDetails/IssueError';
import useIssueAction from 'hook/useIssueAction';

const Detail = () => {
  const { issueNumber } = useParams();
  const { handleGetIssueByIssueNumber, handleRefreshCurrentPost, loading } = useIssueAction();

  const [issue, setIssue] = useState<IIssueChild>();
  const fetch = useCallback(async () => {
    const issue = await handleGetIssueByIssueNumber(Number(issueNumber));
    setIssue(issue);
  }, [handleGetIssueByIssueNumber, issueNumber]);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetch();
    handleScrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefreshCallback = async () => {
    setIssue({} as IIssueChild);
    const newIssue = await handleRefreshCurrentPost(Number(issueNumber));
    setIssue(newIssue);
  };

  return (
    <div>
      <Header refreshCallback={handleRefreshCallback} />
      {issue && <IssueDetails issue={issue} />}
      {loading === 'pending' && <IssueLoading />}
      {loading === 'failed' && <IssueError />}
    </div>
  );
};

export default Detail;
