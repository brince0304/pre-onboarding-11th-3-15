import { Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import * as S from './Header.style';
import { useIssues } from '../../context/IssueContext';
const Header = ({ repositoryName, owner }: IHeaderProps) => {
  const headerTitle = `${owner}/${repositoryName}`;
  const typographyProps = {
    fontWeight: 'bold',
    color: '#121212',
    fontSize: '1.5rem',
  };
  const { handleResetPage } = useIssues();
  return (
    <S.Header>
      <S.TitleBox>
        <Typography {...typographyProps}>{headerTitle}</Typography>
        <S.RefreshButton onClick={handleResetPage}>
          <AutorenewIcon />
        </S.RefreshButton>
      </S.TitleBox>
    </S.Header>
  );
};

interface IHeaderProps {
  repositoryName: string;
  owner: string;
}

export default Header;
