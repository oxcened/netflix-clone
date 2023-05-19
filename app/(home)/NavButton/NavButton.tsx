import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export type NavButtonProps = {
  dir: 'left' | 'right';
  onClick?: () => void;
};

export function NavButton({ dir, onClick }: NavButtonProps) {
  return (
    <button
      className={twMerge(
        'group absolute bg-black/50 z-10 top-0 bottom-0 w-[calc(4%-0.2rem)] grid place-content-center',
        dir === 'right' && 'right-0 rounded-l-[4px]',
        dir === 'left' && 'left-0 rounded-r-[4px]'
      )}
      onClick={onClick}
    >
      <Image
        src={`/chevron_${dir}.svg`}
        width={35}
        height={35}
        alt={`Navigate ${dir}`}
        className="hidden group-hover:block"
      />
    </button>
  );
}
