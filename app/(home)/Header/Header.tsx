import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-[url(/header_background.webp)] bg-no-repeat bg-center bg-cover aspect-video items-center hidden lg:flex">
      <header className="px-[4%] mb-20">
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

        <button className="bg-neutral-800/40 rounded-[4px] text-lg font-medium px-6 py-1.5 ml-2 text-white inline-flex items-center gap-3 hover:bg-neutral-800/80">
          <Image src="/info_icon.svg" alt="play" width={25} height={25} />
          More Info
        </button>
      </header>
    </div>
  );
}