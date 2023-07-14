import * as S from './IssueLoading.style';
import loading from '../../assets/images/mona-loading-dark.gif';
import {apiLoadingMessage} from "../../utils";

const IssueLoading = () => {
  return (
    <S.Container>
      <img src={loading} alt="loading" />
      <h1>{apiLoadingMessage}</h1>
    </S.Container>
  );
};

export default IssueLoading;
