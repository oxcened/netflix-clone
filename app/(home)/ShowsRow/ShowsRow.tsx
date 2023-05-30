import Image from 'next/image';
import useViewportWidth from '@/app/hooks/useViewportWidth';
import { useEffect, useRef, useState } from 'react';
import { NavButton } from '@/app/(home)/NavButton/NavButton';
import useDragged, { UseDraggedParams } from '@/app/hooks/useDragged';
import { Profile } from '@/app/(home)/Profile';
import { ShowRow } from '@/app/(home)/Show';
import Show from '@/app/(home)/Show/Show';

export type RowPosition = 'first' | 'middle' | 'last';

function getSliderSize(width: number) {
  let size = 2;

  if (width >= 500 && width < 800) {
    size = 3;
  } else if (width >= 800 && width < 1100) {
    size = 4;
  } else if (width >= 1100 && width < 1400) {
    size = 5;
  } else if (width >= 1400) {
    size = 6;
  }

  return size;
}

export type ShowsRowProps = {
  data: ShowRow;
  onShowMouseEnter?: (
    element: HTMLDivElement,
    previewUrl: string,
    rowPosition: RowPosition
  ) => void;
  onShowMouseLeave?: (element: HTMLDivElement) => void;
  profile: Profile;
};

export default function ShowsRow({
  data: { title, shows, is_numbered },
  profile,
  onShowMouseEnter,
  onShowMouseLeave,
}: ShowsRowProps) {
  const width = useViewportWidth();
  const [page, setPage] = useState(is_numbered ? 0 : 1);
  const sliderRef = useRef<HTMLDivElement>(null);

  const onTouchDrag: UseDraggedParams<HTMLDivElement>['onDragX'] = function (dir) {
    if (dir === 'right' ? !canNext : !canPrev) return;
    setPage((p) => p + (dir === 'right' ? 1 : -1));
  };

  useDragged({
    element: sliderRef,
    onDragX: onTouchDrag,
  });

  useEffect(() => {
    // Width changes reflect on the size and length of pages so we better reset just to be safe.
    setPage(is_numbered ? 0 : 1);
  }, [width]);

  function getRowPosition(index: number): RowPosition {
    const offset = index % size;

    if (offset === 0) {
      return 'first';
    } else if (offset === size - 1) {
      return 'last';
    } else {
      return 'middle';
    }
  }

  const size = getSliderSize(width);
  const pages = shows.length / size;
  const canPrev = page > 0;
  const canNext = page < pages - 1;
  const sliderTranslationPercentage = -page * 100;
  const showWidthPercentage = (1 / size) * 100;
  const mappedTitle = title.replace('{{name}}', profile.name);

  return (
    <section>
      <h2 className="font-medium text-neutral-200 text-lg px-[4%]">
        {mappedTitle}
      </h2>

      <div className="mt-2 overflow-hidden px-[4%] relative group/row">
        <NavButton
          dir="left"
          invisible={!canPrev}
          onClick={() => setPage((p) => p - 1)}
        />

        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 touch-pan-y"
          style={{ transform: `translateX(${sliderTranslationPercentage}%)` }}
        >
          {shows.map((show, i) => (
            // List is not getting reordered so the index is just fine
            <Show
              key={i}
              show={show}
              widthPercentage={showWidthPercentage}
              isNumbered={is_numbered}
              index={i + 1}
              onMouseEnter={({ target }) =>
                onShowMouseEnter?.(
                  target as HTMLDivElement,
                  show.horizontal_image,
                  getRowPosition(i)
                )
              }
              onMouseLeave={({ target }) =>
                onShowMouseLeave?.(target as HTMLDivElement)
              }
            />
          ))}
        </div>

        <NavButton
          dir="right"
          invisible={!canNext}
          onClick={() => setPage((p) => p + 1)}
        />
      </div>
    </section>
  );
}
