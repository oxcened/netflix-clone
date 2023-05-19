'use client';

import Image from 'next/image';
import useViewportWidth from '@/app/hooks/useViewportWidth';
import { useEffect, useState } from 'react';

export type ShowsRowProps = {
  data: {
    title: string;
    content_urls: string[];
  };
};

export default function ShowsRow({
  data: { title, content_urls },
}: ShowsRowProps) {
  const width = useViewportWidth();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [width]);

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

  const pages = content_urls.length / size;
  const canPrev = page > 0;
  const canNext = page < pages - 1;

  return (
    <section>
      <h2 className="font-bold text-white text-lg px-[4%]">{title}</h2>

      <div className="mt-2 overflow-hidden px-[4%] relative">
        {canPrev && (
          <button
            className="group absolute left-0 bg-black/50 z-10 top-0 bottom-0 w-[calc(4%-0.2rem)] rounded-r-[4px] grid place-content-center pr-[0.2rem]"
            onClick={() => setPage((p) => p - 1)}
          >
            <Image
              src="/chevron_left.svg"
              width={35}
              height={35}
              alt="Navigate back"
              className="hidden group-hover:block"
            />
          </button>
        )}

        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(${-page * 100}%)` }}
        >
          {content_urls.map((v, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-[0.2rem]"
              style={{ width: `${(1 / size) * 100}%` }}
            >
              <div className="relative aspect-video">
                <Image
                  src={v}
                  alt="show"
                  className="rounded-[4px]"
                  fill={true}
                />
              </div>
            </div>
          ))}
        </div>

        {canNext && (
          <button
            className="group absolute right-0 bg-black/50 z-10 top-0 bottom-0 w-[calc(4%-0.2rem)] rounded-l-[4px] grid place-content-center"
            onClick={() => setPage((p) => p + 1)}
          >
            <Image
              src="/chevron_right.svg"
              width={35}
              height={35}
              alt="Navigate back"
              className="hidden group-hover:block"
            />
          </button>
        )}
      </div>
    </section>
  );
}
