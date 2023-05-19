import Image from 'next/image';
import useViewportWidth from '@/app/hooks/useViewportWidth';
import { useEffect, useState } from 'react';
import { NavButton } from '@/app/(home)/NavButton/NavButton';

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
  data: {
    title: string;
    content_urls: string[];
  };
  onShowMouseEnter?: (element: HTMLImageElement, previewUrl: string) => void;
  onShowMouseLeave?: (element: HTMLImageElement, previewUrl: string) => void;
};

export default function ShowsRow({
  data: { title, content_urls },
  onShowMouseEnter,
  onShowMouseLeave,
}: ShowsRowProps) {
  const width = useViewportWidth();
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Width changes reflect on the size and length of pages so we better reset just to be safe.
    setPage(1);
  }, [width]);

  const [isTransitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timeout = window.setTimeout(() => setTransitioning(false), 700);
    return () => window.clearTimeout(timeout);
  }, [page]);

  const size = getSliderSize(width);
  const pages = content_urls.length / size;
  const canPrev = page > 0;
  const canNext = page < pages - 1;
  const sliderTranslationPercentage = -page * 100;
  const showWidthPercentage = (1 / size) * 100;

  return (
    <section>
      <h2 className="font-medium text-neutral-200 text-lg px-[4%]">{title}</h2>

      <div className="mt-2 overflow-hidden px-[4%] relative">
        {(canPrev || isTransitioning) && (
          <NavButton
            dir="left"
            invisible={!canPrev && isTransitioning}
            onClick={() => setPage((p) => p - 1)}
          />
        )}

        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(${sliderTranslationPercentage}%)` }}
        >
          {content_urls.map((v, i) => (
            <div
              // List is not getting reordered so the index is just fine
              key={i}
              className="flex-shrink-0 px-[0.2rem] cursor-pointer"
              style={{ width: `${showWidthPercentage}%` }}
            >
              <div className="relative aspect-video">
                <Image
                  src={v}
                  alt="show"
                  className="rounded-[4px]"
                  fill={true}
                  onMouseEnter={({ target }) =>
                    onShowMouseEnter?.(target as HTMLImageElement, v)
                  }
                  onMouseLeave={({ target }) =>
                    onShowMouseLeave?.(target as HTMLImageElement, v)
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {(canNext || isTransitioning) && (
          <NavButton
            dir="right"
            invisible={!canNext && isTransitioning}
            onClick={() => setPage((p) => p + 1)}
          />
        )}
      </div>
    </section>
  );
}
