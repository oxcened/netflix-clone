import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export type NavButtonProps = {
  dir: 'left' | 'right';
  invisible?: boolean;
  onClick?: () => void;
};

export function NavButton({ dir, invisible, onClick }: NavButtonProps) {
  function click() {
    if (!invisible) {
      onClick?.();
    }
  }

  return (
    <button
      className={twMerge(
        'group/button absolute bg-neutral-900/50 hover:bg-neutral-900/70 z-10 top-0 bottom-0 w-[calc(4%-0.2rem)] grid place-content-center transition-colors',
        dir === 'right' && 'right-0 rounded-l-[4px]',
        dir === 'left' && 'left-0 rounded-r-[4px]',
        invisible && 'opacity-0 cursor-default'
      )}
      onClick={click}
    >
      <Image
        fill
        src={`/chevron_${dir}.svg`}
        alt={`Navigate ${dir}`}
        className="hidden group-hover/row:block group-hover/button:scale-125 transition-transform"
      />
    </button>
  );
}
