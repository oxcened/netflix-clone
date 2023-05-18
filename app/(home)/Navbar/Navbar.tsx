import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-black/70 from-10%">
      <div className="container mx-auto px-4 lg:px-0 py-3 flex items-center gap-10">
        <a href="#">
          <Image src="/logo.svg" alt="User avatar" height={30} width={92} />
        </a>

        <ul className="flex gap-5 text-white items-center text-sm font-light flex-1">
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
            <button>Kids</button>
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
      </div>
    </nav>
  );
}
