import Header from '../components/common/Header';
import IssueList from '../components/IssueList/IssueList';
import { Container } from '@mui/material';
import { useIssues } from '../context/IssueContext';

const Issues = () => {
  const { handleResetPage } = useIssues();
  return (
    <Container>
      <Header refreshCallback={handleResetPage} />
      <IssueList />
    </Container>
  );
};

export default Issues;
