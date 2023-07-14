import { CircularProgress } from '@mui/material';
import * as S from './ListStatus.style';
import {apiLoadingMessage} from "../../../utils";
const Loading = () => {
  return (
    <S.Container>
      <CircularProgress variant={'indeterminate'} size={24} />
        {apiLoadingMessage}
    </S.Container>
  );
};

export default Loading;
