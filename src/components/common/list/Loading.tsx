import { CircularProgress } from '@mui/material';
import * as S from './Loading.style';
const Loading = () => {
  return (
    <S.Container>
      <CircularProgress variant={'indeterminate'} size={24} />
      로딩 중 ...
    </S.Container>
  );
};

export default Loading;
