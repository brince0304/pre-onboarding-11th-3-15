import Header from '../components/common/Header';
import IssueList from '../components/IssueList';

const Issues = () => {
  const repo = process.env.REACT_APP_GITHUB_REPO as string;
  const owner = process.env.REACT_APP_GITHUB_OWNER as string;
  return (
    <div>
      <Header repositoryName={repo} owner={owner} />
      <IssueList/>
    </div>
  );
}

export default Issues;