import React, { useRef, useEffect, useCallback } from 'react';

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}


const useScrollCountUp = (end : number, start = 0, duration = 2000, delay = 0) => {
  const element = React.useRef<HTMLInputElement>(null);
  const observer : any = useRef(null);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const onScroll = useCallback(
    ([entry] : any) => {
      const { current } : any = element;
      if (entry.isIntersecting) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber ++;
          current.innerHTML = currentNumber;
          if (currentNumber === end) {
            clearInterval(counter);
            observer.current.disconnect(element.current);
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, element],
  );

  useEffect(() => {
    if (element.current) {
      observer.current = new IntersectionObserver(onScroll, { threshold: 0.5 });
      observer.current.observe(element.current);
    }

    return () => observer.current && observer.current.disconnect();

  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCountUp;
