import Navbar from '@/app/(home)/Navbar/Navbar';
import Header from '@/app/(home)/Header/Header';
import Footer from '@/app/(home)/Footer/Footer';
import ShowsRows from '@/app/(home)/ShowsRows/ShowsRows';
import data from '@/public/home_mock.json';
import { Profile } from '@/app/(home)/Profile';

export type BrowseProps = {
  profile?: Profile;
};

export default function Browse({
  profile = {
    name: 'Guest',
    imageUrl: '/avatar.png',
  },
}: BrowseProps) {
  return (
    <>
      <Navbar profile={profile} />
      <Header data={data.header} />
      <ShowsRows data={data.shows} profile={profile} />
      <Footer />
    </>
  );
}
