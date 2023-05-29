'use client';

import ShowsRow, {
  RowPosition,
  ShowsRowProps,
} from '@/app/(home)/ShowsRow/ShowsRow';
import ShowModal from '@/app/(home)/ShowModal/ShowModal';
import { useRef, useState } from 'react';
import { Profile } from '@/app/(home)/Profile';
import { ShowRow } from '@/app/(home)/Show';

export type ShowsProps = {
  data: ShowRow[];
  profile: Profile;
};

export default function ShowsRows({ data, profile }: ShowsProps) {
  const openModalTimeout = useRef<number>();
  const [isModalOpen, setModalOpen] = useState(false);
  const [hoveredShow, setHoveredShow] =
    useState<[HTMLDivElement, string, RowPosition]>();

  const openModal: ShowsRowProps['onShowMouseEnter'] = function (
    element,
    previewUrl,
    rowPosition
  ) {
    openModalTimeout.current = window.setTimeout(() => {
      openModalTimeout.current = undefined;
      setHoveredShow([element, previewUrl, rowPosition]);
      setModalOpen(true);
    }, 500);
  };

  function closeModal() {
    setModalOpen(false);
    // Don't clean hoveredShow because I don't need to, plus it allows for the unmount animation to complete
  }

  function cancelTimer() {
    if (openModalTimeout.current != null) {
      window.clearTimeout(openModalTimeout.current);
    }
  }

  return (
    <div className="relative lg:-top-[14vw]">
      <div className="space-y-12 pt-24 lg:pt-0">
        {data.map((v) => (
          <ShowsRow
            key={v.title}
            data={v}
            profile={profile}
            onShowMouseEnter={openModal}
            onShowMouseLeave={cancelTimer}
          />
        ))}
      </div>

      <ShowModal
        isOpen={isModalOpen}
        hoveredShow={hoveredShow}
        onMouseLeave={closeModal}
      />
    </div>
  );
}
