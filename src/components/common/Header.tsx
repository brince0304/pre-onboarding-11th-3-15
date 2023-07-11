import { Typography } from '@mui/material';
import * as S from './Header.style';
const Header = ({ repositoryName, owner }: IHeaderProps) => {
  const headerTitle = `${owner}/${repositoryName}`;
  const typographyProps = {
    fontWeight: 'bold',
    color: '#121212',
    fontSize: '1.5rem',
  };
  return (
    <S.Header>
      <Typography {...typographyProps}>{headerTitle}</Typography>
    </S.Header>
  );
};

interface IHeaderProps {
  repositoryName: string;
  owner: string;
}

export default Header;
