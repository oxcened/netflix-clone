import Image from 'next/image';
import { Show } from '@/app/(home)/Show';
import { MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

export type ShowProps = {
  show: Show;
  widthPercentage: number;
  isNumbered?: boolean;
  index: number;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
};

export default function Show({
  show,
  widthPercentage,
  isNumbered,
  index,
  onMouseEnter,
  onMouseLeave,
}: ShowProps) {
  function getImage() {
    if (isNumbered && show.vertical_image) {
      return show.vertical_image;
    } else {
      return show.horizontal_image;
    }
  }

  const image = getImage();

  return (
    <div
      className="flex-shrink-0 px-[0.2rem] cursor-pointer"
      style={{ width: `${widthPercentage}%` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex pointer-events-none">
        {isNumbered && (
          <div className="relative flex-1 text-neutral-200">
            <Image fill src={`/vectors/${index}.svg`} alt={index.toString()} />
          </div>
        )}

        <div
          className={twMerge(
            'relative flex-1 aspect-video',
            isNumbered && 'aspect-[9/13]'
          )}
        >
          <Image fill src={image} alt={image} className="rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}
