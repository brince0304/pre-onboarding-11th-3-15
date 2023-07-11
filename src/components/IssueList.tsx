
import IssueItem from './IssueItem';
import { useIssues } from '../context/IssueContext';
import { useEffect } from 'react';

const IssueList = () => {
  const { handleGetIssues,issues, loading, error } = useIssues();
  useEffect(() => {
    handleGetIssues();
  }, []);

  return (
    <div>
      {issues && issues.map((issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
      {loading === 'pending' && <div>로딩중</div>}
      {error && <div>에러 발생</div>}
      <button onClick={handleGetIssues}>더보기</button>
    </div>
  );
};

export default IssueList;
