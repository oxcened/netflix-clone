'use client';

import ShowsRow, { ShowsRowProps } from '@/app/(home)/ShowsRow/ShowsRow';
import ShowModal from '@/app/(home)/ShowModal/ShowModal';
import { useRef, useState } from 'react';

export type ShowsProps = {
  data: {
    title: string;
    content_urls: string[];
  }[];
};

export default function ShowsRows({ data }: ShowsProps) {
  const openModalTimeout = useRef<number>();
  const [isModalOpen, setModalOpen] = useState(false);
  const [hoveredShow, setHoveredShow] = useState<[HTMLImageElement, string]>();

  const openModal: ShowsRowProps['onShowMouseEnter'] = function (
    element,
    previewUrl
  ) {
    openModalTimeout.current = window.setTimeout(() => {
      openModalTimeout.current = undefined;
      setHoveredShow([element, previewUrl]);
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
