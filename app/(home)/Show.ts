export type Show = {
  horizontal_image: string;
  vertical_image?: string;
};

export type ShowRow = {
  title: string;
  shows: Show[];
  is_numbered?: boolean;
};
