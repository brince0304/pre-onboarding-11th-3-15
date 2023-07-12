import IssueDetails from '../components/IssueDetails/IssueDetails';
import { useParams } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import { IIssueChild } from '../interfaces/IIssues';
import { useIssues } from '../context/IssueContext';
import Header from '../components/common/Header';
import IssueLoading from '../components/IssueDetails/IssueLoading';

const Detail = () => {
  const { issueNumber } = useParams();
  const { handleGetIssueByIssueNumber, loading, handleRefreshCurrentPost } = useIssues();
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
    setIssue(undefined);
    const newIssue = await handleRefreshCurrentPost(Number(issueNumber));
    setIssue(newIssue);
  };

  return (
    <div>
      <Header refreshCallback={handleRefreshCallback} />
      {issue && <IssueDetails issue={issue} />}
      {loading === 'pending' && <IssueLoading />}
      {loading === 'failed' && <div>error...</div>}
    </div>
  );
};

export default Detail;
