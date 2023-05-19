import Navbar from '@/app/(home)/Navbar/Navbar';
import Header from '@/app/(home)/Header/Header';
import Footer from '@/app/(home)/Footer/Footer';
import Shows from '@/app/(home)/Shows/Shows';

export default function HomePage() {
  return (
    <main className="bg-neutral-900">
      <Navbar />
      <Header />
      <Shows />
      <Footer />
    </main>
  );
}
