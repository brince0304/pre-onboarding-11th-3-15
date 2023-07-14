import Header from '../components/common/Header';
import IssueList from '../components/IssueList/IssueList';
import { Container } from '@mui/material';
import useIssueAction from 'hook/useIssueAction';

const Issues = () => {
  const { handleResetPage } = useIssueAction();
  return (
    <Container>
      <Header refreshCallback={handleResetPage} />
      <IssueList />
    </Container>
  );
};

export default Issues;
