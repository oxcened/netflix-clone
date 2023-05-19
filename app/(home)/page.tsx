import Navbar from '@/app/(home)/Navbar/Navbar';
import Header from '@/app/(home)/Header/Header';
import Footer from '@/app/(home)/Footer/Footer';
import Shows from '@/app/(home)/Shows/Shows';
import data from '@/public/home_mock.json';

export default function HomePage() {
  return (
    <main className="bg-neutral-900">
      <Navbar />
      <Header data={data.header} />
      <Shows data={data.shows} />
      <Footer />
    </main>
  );
}
