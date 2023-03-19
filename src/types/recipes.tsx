export type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: [];
  directions: string;
  ownerId?: string;
};
