import Browse from '@/app/(home)/Browse/Browse';
import ChooseProfile from '@/app/(home)/ChooseProfile/ChooseProfile';

export default function HomePage() {
  return (
    <main className="bg-neutral-900">
      <ChooseProfile>
        <Browse />
      </ChooseProfile>
    </main>
  );
}
