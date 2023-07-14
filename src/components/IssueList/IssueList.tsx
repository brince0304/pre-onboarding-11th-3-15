import IssueItem from './IssueItem/IssueItem';
import { useIssues } from '../../context/IssueContext';
import { useEffect, useRef } from 'react';
import * as S from './IssueList.style';
import AdBox from '../common/list/AdBox';
import Loading from '../common/list/Loading';
import HasNoMore from '../common/list/HasNoMore';
import Error from '../common/list/Error';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const IssueList = () => {
  const issueState = useSelector((state: RootState) => state.issueReducer);
  const { loading, issues, hasMore } = issueState;
  const { handleGetIssues } = useIssues();

  const adBoxProps = {
    alt: '광고',
    src: 'https://image1.marpple.co/files/u_1371660/2020/11/original/79f3b672740b1a7688b84a8bfd903bcc1b28d4431.png?w=1200&f=webp',
    linkTo: 'https://www.wanted.co.kr/',
    width: '100%',
    height: '100%',
  };

  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, observerOptions);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      handleGetIssues();
    }
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
      {loading === 'pending' && <Loading />}
      {!hasMore && loading !== 'failed' && <HasNoMore />}
      {loading === 'failed' && <Error />}
      <div id="bottom" ref={observerRef}></div>
    </S.Container>
  );
};

export default IssueList;
