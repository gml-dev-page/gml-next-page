import { useEffect } from 'react';

export function useScroll(ref : any, callback : any) {
  useEffect(() => {
    const scrollHandler = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        if (isVisible) {
          callback();
        }
      }
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // 초기 로딩 시에도 확인하기 위해 호출

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [ref, callback]);
}