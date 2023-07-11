import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { useEffect } from 'react';
import IssueItem from './IssueItem';
import { useIssues } from '../context/IssueContext';
import { getIssues, setPage } from '../redux/issueReducer';

const IssueList = () => {
  const issueState = useSelector((state: RootState) => state.issueReducer);
  const dispatch = useAppDispatch();
  const { loading, error, issues, page } = issueState;
  const { getIssuesByPage: getIssue } = useIssues();

  useEffect(() => {
    try {
      dispatch(
        getIssues({
          page: page,
          getIssuesByPage: getIssue,
        }),
      );
      dispatch(setPage(page + 1));
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      {issues.map((issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
      {loading === 'pending' && <div>로딩중</div>}
      {error && <div>에러 발생</div>}
    </div>
  );
};

export default IssueList;
