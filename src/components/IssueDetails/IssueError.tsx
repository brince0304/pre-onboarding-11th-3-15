import * as S from './IssueLoading.style';
import error from '../../assets/images/404_animation.gif';

const IssueError = () => {
  return (
    <S.Container>
      <img src={error} alt="error" />
    </S.Container>
  );
};

export default IssueError;