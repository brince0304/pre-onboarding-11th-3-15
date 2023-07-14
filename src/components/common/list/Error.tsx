import * as S from './ListStatus.style';
import useIssueAction from "../../../hook/useIssueAction";

const Error = () => {
    const {error} = useIssueAction();
  return (
    <S.Container>
      <S.ErrorText>{error}</S.ErrorText>
    </S.Container>
  );
};

export default Error;
