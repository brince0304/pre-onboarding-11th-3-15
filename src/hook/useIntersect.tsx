import { useRef, useEffect } from 'react';

function useIntersect(callback: () => void) {
  const observerRef = useRef<HTMLDivElement>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      callback();
    }
  };

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

  return observerRef;
}

export default useIntersect;
