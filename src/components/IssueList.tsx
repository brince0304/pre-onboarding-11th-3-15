import IssueItem from './IssueItem/IssueItem';
import { useIssues } from '../context/IssueContext';
import { useEffect, useRef } from 'react';
import * as S from './IssueList.style';
import AdBox from './common/AdBox';
import Loading from './Loading';

const IssueList = () => {
  const { handleGetIssues, issues, loading } = useIssues();

  const adBoxProps = {
    alt: '광고',
    src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
    linkTo: 'https://www.wanted.co.kr/',
    width: '478px',
    height: '100px',
  };

  const observerRef = useRef<HTMLDivElement>(null); // Intersection Observer의 ref 설정

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
        observer.unobserve(observerRef.current);
      }
    };
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
          if (index % 5 === 0 && index !== 0) {
            return [<AdBox {...adBoxProps} key={index + 'ad'} />, <IssueItem issue={issue} key={index} />];
          } else {
            return <IssueItem issue={issue} key={index} />;
          }
        })}
      {loading === 'pending' && <Loading />}
      {loading === 'failed' && <div>에러 발생</div>}
      <div id="bottom" ref={observerRef}></div>
    </S.Container>
  );
};

export default IssueList;
