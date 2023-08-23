import {useLayoutEffect, useMemo, useState} from "react";

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

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentBreakpoint = useMemo(() =>
    Object.keys(TAILWIND_BREAKPOINTS).find((key) =>
      TAILWIND_BREAKPOINTS[key as keyof typeof TAILWIND_BREAKPOINTS] >= dimensions.width
    ), [dimensions]);

  const mobileBreakpoints = ['sm', 'tablet'];

  const isMobileBreakpoint = mobileBreakpoints.includes(currentBreakpoint);

  return { currentBreakpoint, dimensions, isMobileBreakpoint };
}
