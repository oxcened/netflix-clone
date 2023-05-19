import ShowsRow from '@/app/(home)/ShowRow/ShowsRow';

export type ShowsProps = {
  data: {
    title: string;
    content_urls: string[];
  }[];
};

export default function Shows({ data }: ShowsProps) {
  return (
    <div className="relative lg:-top-[14vw]">
      <div className="space-y-12 pt-24 lg:pt-0">
        {data.map((v) => (
          <ShowsRow key={v.title} data={v} />
        ))}
      </div>
    </div>
  );
}
