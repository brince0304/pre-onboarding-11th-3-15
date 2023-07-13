import IssueItem from './IssueItem/IssueItem';
import { useIssues } from '../../context/IssueContext';
import * as S from './IssueList.style';
import AdBox from '../common/list/AdBox';
import Loading from '../common/list/Loading';
import HasNoMore from '../common/list/HasNoMore';
import Error from '../common/list/Error';
import useIntersect from 'hook/useIntersect';

const IssueList = () => {
  const { handleGetIssues, issues, loading, hasMore } = useIssues();
  const observerRef = useIntersect(() => hasMore && handleGetIssues());

  const isPending = loading === 'pending';
  const hasNoMore = !hasMore && loading !== 'failed';
  const isFail = loading === 'failed';

  const adBoxProps = {
    alt: '광고',
    src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
    linkTo: 'https://www.wanted.co.kr/',
    width: '478px',
    height: '100px',
  };

  return (
    <S.Container>
      {issues &&
        issues.flatMap((issue, index) => {
          if (index % 4 === 0 && index !== 0) {
            return [<AdBox {...adBoxProps} key={index + 'ad'} />, <IssueItem issue={issue} key={index} />];
          } else {
            return <IssueItem issue={issue} key={index} />;
          }
        })}
      {isPending && <Loading />}
      {hasNoMore && <HasNoMore />}
      {isFail && <Error />}
      <div id="bottom" ref={observerRef}></div>
    </S.Container>
  );
};

export default IssueList;
