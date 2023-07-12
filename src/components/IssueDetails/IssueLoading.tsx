import * as S from './IssueLoading.style';
import loading from '../../assets/images/mona-loading-dark.gif';

const IssueLoading = () => {
  return (
    <S.Container>
      <img src={loading} alt="loading" />
      <h1>로딩중입니다...</h1>
    </S.Container>
  );
};

export default IssueLoading;
