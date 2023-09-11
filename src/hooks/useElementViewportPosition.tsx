import {RefObject, useEffect, useState} from "react";
import useGetCurrentBreakpoint from "./useGetCurrentBreakpoint";

export const useElementViewportPosition = (ref: RefObject<HTMLElement>) => {
  const [position, setPosition] = useState<[number, number]>([0, 0]);
  const { dimensions } = useGetCurrentBreakpoint();

  useEffect(() => {
    if (!ref || !ref.current) return;

    const firstChild = ref.current.firstElementChild;
    const firstChildHeight = firstChild ? firstChild.clientHeight : 0;

    console.log(firstChildHeight)

    const elementHeight = ref.current.offsetHeight;
    const viewportHeight = dimensions.height - 55;
    const largerThanViewport = elementHeight > viewportHeight;
    const pageHeight = document.body.scrollHeight - 55;
    const delayedStart = ref.current.offsetTop + firstChildHeight;
    const delayedEnd= delayedStart + elementHeight;
    const start = ref.current.offsetTop;
    const end = start + elementHeight;

    setPosition([
      (largerThanViewport ? delayedStart : start) / pageHeight,
      (largerThanViewport ? delayedEnd : end) / pageHeight
    ]);
  }, [dimensions.width, ref]);

  return { position };
}
