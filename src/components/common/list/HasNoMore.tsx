import * as S from './ListStatus.style';
import ClearIcon from '@mui/icons-material/Clear';

const HasNoMore = () => {
  return (
    <S.Container>
      <ClearIcon />더 이상 데이터가 없습니다.
    </S.Container>
  );
};

export default HasNoMore;
