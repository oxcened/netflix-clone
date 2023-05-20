import { useEffect, useRef } from 'react';

const minimumDragPx = 50;

export type UseDraggedParams = {
  element?: HTMLElement | null;
  onDragX?: (dir: 'left' | 'right') => void;
};

export default function useDragged({ element, onDragX }: UseDraggedParams) {
  const startX = useRef<number>();

  useEffect(() => {
    if (!element) {
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

    element.addEventListener('touchstart', start);
    element.addEventListener('touchend', end);

    return () => {
      element.removeEventListener('touchstart', start);
      element.removeEventListener('touchend', end);
    };
  }, [element, onDragX]);
}
