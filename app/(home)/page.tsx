import Navbar from '@/app/(home)/Navbar/Navbar';
import Image from 'next/image';
import ShowsRow from '@/app/(home)/ShowRow/ShowsRow';
import Header from '@/app/(home)/Header/Header';

export default function HomePage() {
  return (
    <main className="bg-neutral-900">
      <Navbar />
      <Header />

      <div className="space-y-10 pt-24 lg:pt-0 relative lg:-top-[5.5rem]">
        {new Array(6).fill(0).map((v, i) => (
          <ShowsRow key={i} />
        ))}
      </div>
    </main>
  );
}
