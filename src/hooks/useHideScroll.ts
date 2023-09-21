import {useEffect} from "react";
import useGetCurrentBreakpoint from "./useGetCurrentBreakpoint";

export const useHideScroll = (trigger: boolean, hideOnMobileOnly: boolean = false) => {
  const { isMobileBreakpoint } = useGetCurrentBreakpoint();

  useEffect(() => {
    const htmlTag = document.querySelector('html');
    if (!htmlTag) return;
    if (hideOnMobileOnly && !isMobileBreakpoint) return;
    if (trigger) {
      htmlTag.style.overflow = 'hidden';
    }
    return () => {
      htmlTag.style.overflow = 'auto';
    };
  }, [trigger, isMobileBreakpoint]);
};
