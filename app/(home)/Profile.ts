export type Profile = {
  name: string;
  imageUrl: string;
};

export const GUEST_PROFILE: Profile = {
  name: 'Guest',
  imageUrl: '/avatar.png',
};
