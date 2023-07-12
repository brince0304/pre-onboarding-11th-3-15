import RepositoryThumbnail from '../components/common/list/RepositoryThumbnail';
import { useInfo } from '../context/InfoContext';
import * as S from './Main.style';

const Main = () => {
  const { repositoryName, owner } = useInfo();

  return (
    <S.Container>
      <h2>Repositories</h2>
      <RepositoryThumbnail repo={repositoryName ? repositoryName : ''} owner={owner ? owner : ''} />
    </S.Container>
  );
};

export default Main;
