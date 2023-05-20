'use client';

import Image from 'next/image';
import useScrolled from '@/app/hooks/useScrolled';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
  const isScrolled = useScrolled();

  return (
    <nav
      className={twMerge(
        'bg-gradient-to-b from-black/70 from-10% fixed top-0 left-0 right-0 z-20 transition-colors duration-500',
        isScrolled && 'bg-neutral-900'
      )}
    >
      <div className="px-[4%] py-3 flex items-center gap-5 sm:gap-7 md:gap-10">
        <a href="#">
          <Image src="/logo.svg" alt="User avatar" height={30} width={92} />
        </a>

        <ul className="gap-5 text-white items-center text-sm font-light flex-1 hidden lg:flex">
          <li>
            <a href="#" className="font-medium">
              Home
            </a>
          </li>

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

          <li className="ml-auto">
            <button>Search</button>
          </li>

          <li>
            <a href="#">Kids</a>
          </li>

          <li>
            <button>Notifications</button>
          </li>

          <li>
            <button>
              <Image
                src="/avatar.png"
                alt="User avatar"
                height={30}
                width={30}
                className="rounded-sm"
              />
            </button>
          </li>
        </ul>

        <ul className="gap-5 text-white items-center text-sm font-light flex-1 flex lg:hidden">
          <li>
            <a href="#" className="font-medium">
              Home
            </a>
          </li>

          <li className="ml-auto">
            <button>Search</button>
          </li>

          <li>
            <button>
              <Image
                src="/avatar.png"
                alt="User avatar"
                height={30}
                width={30}
                className="rounded-sm"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
