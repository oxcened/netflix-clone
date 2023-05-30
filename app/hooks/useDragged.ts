import { RefObject, useEffect, useRef } from 'react';

const minimumDragPx = 50;

export type UseDraggedParams<T extends HTMLElement> = {
  element: RefObject<T>;
  onDragX?: (dir: 'left' | 'right') => void;
};

export default function useDragged<T extends HTMLElement>({
  element,
  onDragX,
}: UseDraggedParams<T>) {
  const startX = useRef<number>();

  useEffect(() => {
    const currentElement = element.current;

    if (!currentElement) {
      return;
    }

    function start(e: TouchEvent) {
      startX.current = e.changedTouches[0]?.pageX;
    }

    function end(e: TouchEvent) {
      if (startX.current == null) {
        return;
      }

      const endX = e.changedTouches[0]?.pageX;

      if (endX == null) {
        return;
      }

      const diff = startX.current - endX;

      if (Math.abs(diff) > minimumDragPx) {
        onDragX?.(diff > 0 ? 'right' : 'left');
      }

      startX.current = undefined;
    }

    currentElement.addEventListener('touchstart', start);
    currentElement.addEventListener('touchend', end);

    return () => {
      currentElement.removeEventListener('touchstart', start);
      currentElement.removeEventListener('touchend', end);
    };
  }, [element, onDragX]);
}
