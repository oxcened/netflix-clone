'use client';

import Image from 'next/image';
import useViewportWidth from '@/app/hooks/useViewportWidth';
import { useState } from 'react';

const PAGES = 3;
const IMAGES = 8;

export default function ShowsRow() {
  const width = useViewportWidth();
  const [page, setPage] = useState(1);

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

  return (
    <section>
      <h2 className="font-bold text-white text-lg px-[4%]">TV Dramas</h2>

      <div className="mt-2 overflow-hidden px-[4%] relative">
        {page > 0 && (
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
          {new Array(size * PAGES).fill(0).map((v, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-[0.2rem]"
              style={{ width: `${(1 / size) * 100}%` }}
            >
              <div className="relative aspect-video">
                <Image
                  key={i}
                  src={`/show_preview_${(i % IMAGES) + 1}.webp`}
                  alt="show"
                  className="rounded-[4px]"
                  fill={true}
                />
              </div>
            </div>
          ))}
        </div>

        {page < PAGES - 1 && (
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
