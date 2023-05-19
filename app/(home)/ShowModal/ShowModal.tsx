import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { useRef } from 'react';

const modalAnimationClasses = {
  entering: 'scale-150 -translate-y-16',
  entered: 'scale-150 -translate-y-16',
  exiting: 'scale-100',
  exited: 'scale-100',
  unmounted: '',
};

const bodyAnimationClasses = {
  entering: 'opacity-1',
  entered: 'opacity-1',
  exiting: 'opacity-0',
  exited: 'opacity-0',
  unmounted: '',
};

export type ShowModalProps = {
  isOpen?: boolean;
  // [img element of the preview, URL source of the preview image]
  hoveredShow?: [HTMLImageElement, string];
  onMouseLeave?: () => void;
};

export default function ShowModal({
  isOpen,
  hoveredShow,
  onMouseLeave,
}: ShowModalProps) {
  const ref = useRef(null);

  const hoveredShowRect = hoveredShow?.[0].getBoundingClientRect();
  const top = (hoveredShowRect?.top ?? 0) + window.scrollY;
  const left = (hoveredShowRect?.left ?? 0) + window.scrollX;
  const height = hoveredShowRect?.height;
  const width = hoveredShowRect?.width;

  return createPortal(
    <Transition
      mountOnEnter
      unmountOnExit
      nodeRef={ref}
      in={isOpen}
      timeout={200}
    >
      {(state) => (
        <div
          ref={ref}
          className={twMerge(
            'hidden lg:block absolute z-20 transition-transform cursor-pointer duration-200',
            modalAnimationClasses[state]
          )}
          style={{ top, left, height, width }}
          onMouseLeave={onMouseLeave}
        >
          <div className="relative aspect-video">
            <Image
              src={hoveredShow![1]}
              alt="show"
              className="rounded-t-[4px]"
              fill={true}
            />
          </div>

          <div
            className={twMerge(
              'bg-neutral-900 text-neutral-200 text-[0.6rem] p-4 rounded-b-[4px] transition-opacity duration-200 shadow-md shadow-black/50',
              bodyAnimationClasses[state]
            )}
          >
            <div className="flex gap-2 mb-4">
              <button className="w-5 h-5 rounded-full bg-white"></button>
              <button className="w-5 h-5 rounded-full border"></button>
              <button className="w-5 h-5 rounded-full border"></button>
              <button className="w-5 h-5 rounded-full border ml-auto"></button>
            </div>

            <div className="flex gap-2 mb-2 items-center">
              <p className="font-medium text-green-400">93% match</p>
              <p className="border border-neutral-200 px-1">18+</p>
              <p>4 seasons</p>
            </div>

            <p>Exciting • Adventure • Dark</p>
          </div>
        </div>
      )}
    </Transition>,
    document.body
  );
}