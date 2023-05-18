import Navbar from '@/app/(home)/Navbar/Navbar';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="">
      <Navbar />

      <div className="bg-[url(/header_background.webp)] pt-32">
        <div className="container mx-auto px-4 lg:px-0">
          <div>
            <Image
              src="/header_logo.webp"
              alt="TV Series logo"
              height={400}
              width={400}
            />

            <p className="max-w-md text-white my-4 text-lg [text-shadow:_2px_2px_4px_rgba(0,0,0,.45)]">
              Learn letters, numbers, animal sounds and more with JJ in this
              musical series that brings fun times with nursery rhymes for the
              whole family!
            </p>

            <button className="bg-white rounded-[4px] text-lg font-medium px-5 py-1.5 inline-flex items-center gap-3">
              <Image src="/play_icon.svg" alt="play" width={25} height={25} />
              Play
            </button>

            <button className="bg-neutral-800/40 rounded-[4px] text-lg font-medium px-6 py-1.5 ml-2 text-white inline-flex items-center gap-3">
              <Image src="/info_icon.svg" alt="play" width={25} height={25} />
              More Info
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
