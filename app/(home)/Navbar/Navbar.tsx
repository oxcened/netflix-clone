'use client';

import Image from 'next/image';
import useScrolled from '@/app/hooks/useScrolled';
import { twMerge } from 'tailwind-merge';
import { Profile } from '@/app/(home)/Profile';

export type NavbarProps = {
  profile?: Profile;
};

export default function Navbar({ profile }: NavbarProps) {
  const isScrolled = useScrolled();

  const home = (
    <a href="#" className="font-medium">
      Home
    </a>
  );

  const search = (
    <button>
      <Image height={24} width={24} src="/search.svg" alt="Search" />
    </button>
  );

  const avatar = (
    <button>
      <Image
        src={profile!.imageUrl}
        alt={profile!.name}
        height={30}
        width={30}
        className="rounded-sm"
      />
    </button>
  );

  return (
    <nav
      className={twMerge(
        'bg-gradient-to-b from-black/70 from-10% fixed top-0 left-0 right-0 z-20 transition-colors duration-500',
        isScrolled && 'bg-neutral-900'
      )}
    >
      <div className="px-[4%] py-3 flex items-center gap-5 sm:gap-7 md:gap-10">
        <a href="#">
          <Image src="/logo.svg" alt="Logo" height={30} width={92} />
        </a>

        <ul className="gap-5 text-white items-center text-sm font-light flex-1 hidden lg:flex">
          <li>{home}</li>

          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">New & Popular</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
          <li>
            <a href="#">Browse by Languages</a>
          </li>

          <li className="ml-auto">{search}</li>

          <li>
            <button>
              <Image
                height={24}
                width={24}
                src="/notification.svg"
                alt="Notifications"
              />
            </button>
          </li>

          <li>{avatar}</li>
        </ul>

        <ul className="gap-5 text-white items-center text-sm font-light flex-1 flex lg:hidden">
          <li>{home}</li>

          <li className="ml-auto">{search}</li>

          <li>{avatar}</li>
        </ul>
      </div>
    </nav>
  );
}
