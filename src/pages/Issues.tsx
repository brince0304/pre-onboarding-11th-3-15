import Header from '../components/common/Header';
import IssueList from '../components/IssueList';
import { Container } from '@mui/material';

const Issues = () => {
  const repo = process.env.REACT_APP_GITHUB_REPO as string;
  const owner = process.env.REACT_APP_GITHUB_OWNER as string;
  return (
    <Container
      sx={{
        marginTop: '80px',
        marginBottom: '2rem',
      }}
    >
      <Header repositoryName={repo} owner={owner} />
      <IssueList />
    </Container>
  );
};

export default Issues;
