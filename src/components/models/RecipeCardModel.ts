export interface RecipeCardImageModel {
  id: string;
  imgTitle: string;
  imgDate: string;
  imgPath: string;
}

export interface RecipeCardModel {
  title: string;
  description: string;
  images: Array<RecipeCardImageModel>;
  owner: string;
  recipeId: string;
}
