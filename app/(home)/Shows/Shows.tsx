import ShowsRow from '@/app/(home)/ShowRow/ShowsRow';

export default function Shows() {
  return (
    <div className="relative lg:-top-[5.5rem]">
      <div className="space-y-12 pt-24 lg:pt-0">
        {new Array(6).fill(0).map((v, i) => (
          <ShowsRow key={i} />
        ))}
      </div>
    </div>
  );
}
