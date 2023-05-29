import Navbar from '@/app/(home)/Navbar/Navbar';
import Header from '@/app/(home)/Header/Header';
import Footer from '@/app/(home)/Footer/Footer';
import ShowsRows from '@/app/(home)/ShowsRows/ShowsRows';
import data from '@/public/home_mock.json';
import { GUEST_PROFILE, Profile } from '@/app/(home)/Profile';

export type BrowseProps = {
  profile?: Profile;
};

export default function Browse({ profile = GUEST_PROFILE }: BrowseProps) {
  return (
    <>
      <Navbar profile={profile} />
      <Header data={data.header} />
      <ShowsRows data={data.shows} profile={profile} />
      <Footer />
    </>
  );
}
