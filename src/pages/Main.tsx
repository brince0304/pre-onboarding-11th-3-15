import RepositoryThumbnail from '../components/common/list/RepositoryThumbnail';

const Main = () => {
  const repo = process.env.REACT_APP_GITHUB_REPO as string;
  const owner = process.env.REACT_APP_GITHUB_OWNER as string;
  return <RepositoryThumbnail repo={repo} owner={owner} />;
};

export default Main;
