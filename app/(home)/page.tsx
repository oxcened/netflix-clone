import Navbar from '@/app/(home)/Navbar/Navbar';
import Image from 'next/image';
import ShowsRow from '@/app/(home)/ShowRow/ShowsRow';

export default function HomePage() {
  return (
    <main className="bg-neutral-900">
      <Navbar />

      <div className="bg-[url(/header_background.webp)] bg-no-repeat bg-center bg-cover pt-32 aspect-video items-center hidden lg:flex">
        <header className="container mx-auto px-4 mb-20">
          <Image
            src="/header_logo.webp"
            alt="TV Series logo"
            height={400}
            width={400}
          />

          <p className="max-w-md text-white my-4 text-lg [text-shadow:_2px_2px_4px_rgba(0,0,0,.45)]">
            Smart, sarcastic and a little dead inside, Wednesday Addams
            investigates a murder spree while making new friends — and foes — at
            Nevermore Academy.
          </p>

          <button className="bg-white rounded-[4px] text-lg font-medium px-5 py-1.5 inline-flex items-center gap-3 hover:bg-white/80">
            <Image src="/play_icon.svg" alt="play" width={25} height={25} />
            Play
          </button>

          <button className="bg-neutral-800/40 rounded-[4px] text-lg font-medium px-6 py-1.5 ml-2 text-white inline-flex items-center gap-3 hover:bg-neutral-800/20">
            <Image src="/info_icon.svg" alt="play" width={25} height={25} />
            More Info
          </button>
        </header>
      </div>

      <div className="space-y-10 pt-24 lg:pt-0 relative lg:-top-[5.5rem]">
        {new Array(6).fill(0).map((v, i) => (
          <ShowsRow key={i} />
        ))}
      </div>
    </main>
  );
}
