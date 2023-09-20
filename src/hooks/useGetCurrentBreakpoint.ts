import {useEffect, useState} from "react";

const TAILWIND_BREAKPOINTS = {
  sm: 600,
  tablet: 900,
  md: 1200
};

export default function useGetCurrentBreakpoint() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentBreakpoint = Object.keys(TAILWIND_BREAKPOINTS).find((key) =>
    TAILWIND_BREAKPOINTS[key as keyof typeof TAILWIND_BREAKPOINTS] >= dimensions.width
  );

  const isMobileBreakpoint = currentBreakpoint === 'sm';

  return { currentBreakpoint, dimensions, isMobileBreakpoint };
}
