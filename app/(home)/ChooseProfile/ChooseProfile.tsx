'use client';

import {
  Children,
  cloneElement,
  isValidElement,
  MouseEventHandler,
  PropsWithChildren,
  useState,
} from 'react';
import Image from 'next/image';
import { BrowseProps } from '@/app/(home)/Browse/Browse';
import { Profile } from '@/app/(home)/Profile';

type ProfileButtonProps = {
  name: string;
  imageUrl: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function ProfileButton({ name, imageUrl, onClick }: ProfileButtonProps) {
  return (
    <button
      className="group flex-1 flex flex-col gap-2 items-center"
      onClick={onClick}
    >
      <div className="rounded-[4px] relative w-full aspect-square overflow-hidden group-hover:ring group-hover:ring-neutral-200">
        <Image fill src={imageUrl} alt={`${name} profile`} />
      </div>

      <p className="text-neutral-500 group-hover:text-neutral-200">{name}</p>
    </button>
  );
}

const profiles: Profile[] = [
  { name: 'Alen', imageUrl: '/avatar.png' },
  { name: 'Zoe', imageUrl: '/avatar_2.png' },
  { name: 'Miles', imageUrl: '/avatar_3.png' },
];

export default function ChooseProfile(props: PropsWithChildren) {
  const [profile, setProfile] = useState<Profile>();

  if (!profile) {
    return (
      <div className="min-h[100svh] min-h-screen grid place-content-center grid-cols-1 px-4">
        <div className="mx-auto w-full max-w-xs flex flex-col">
          <h1 className="text-neutral-200 text-3xl lg:text-4xl text-center">
            Who&apos;s watching?
          </h1>

          <div className="flex gap-5 mt-6">
            {profiles.map((p) => (
              <ProfileButton
                key={p.name}
                name={p.name}
                imageUrl={p.imageUrl}
                onClick={() => setProfile(p)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const children = Children.map(props.children, (child) => {
    if (isValidElement<BrowseProps>(child) && child.type) {
      return cloneElement(child, { profile });
    }

    return child;
  });

  return <>{children}</>;
}
