'use client';

import Image from 'next/image';
import useViewportWidth from '@/app/hooks/useViewportWidth';

export default function ShowsRow() {
  const width = useViewportWidth();

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
      <h2 className="font-bold text-white text-lg container mx-auto px-4 lg:px-0">
        TV Dramas
      </h2>
      <div className="mt-2 overflow-hidden">
        <div
          className={`grid gap-2 container mx-auto px-4 lg:px-0`}
          style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
        >
          {new Array(size).fill(0).map((v, i) => (
            <Image
              key={i}
              src="/show_preview_1.webp"
              alt="show"
              height={300}
              width={300}
              className="rounded-[4px] w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
