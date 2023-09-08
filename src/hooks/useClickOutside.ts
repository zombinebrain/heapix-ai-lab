import { useEffect, useRef } from 'react';

export const useClickOutside = (callback: () => void) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && event.target instanceof Element && !ref.current?.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);

  return ref;
};
