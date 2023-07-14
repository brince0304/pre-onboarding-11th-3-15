import { Typography } from '@mui/material';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import * as S from './Header.style';
import { useNavigate } from 'react-router-dom';
import { useInfo } from '../../context/InfoContext';
const Header = ({ refreshCallback }: IHeaderProps) => {
  const { repositoryName, owner } = useInfo();
  const headerTitle = `${owner}/${repositoryName}`;
  const typographyProps = {
    fontWeight: 'bold',
    color: '#121212',
    fontSize: '1.5rem',
  };
  const navigate = useNavigate();
  const handleNavigateToBack = () => {
    navigate('/issues');
  };
  return (
    <S.Header>
      <S.TitleBox>
        <S.BackButton onClick={handleNavigateToBack}>
          <KeyboardBackspaceIcon />
        </S.BackButton>
        <Typography {...typographyProps}>{headerTitle}</Typography>
        <S.RefreshButton onClick={refreshCallback}>
          <AutorenewIcon />
        </S.RefreshButton>
      </S.TitleBox>
    </S.Header>
  );
};

interface IHeaderProps {
  refreshCallback?: () => void;
}

export default Header;
