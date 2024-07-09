export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantagesDescription: string;
  disadvantagesDescription: string;
  categories: string[];
  tags: string;
  characteristics: Record<string, string>;
}
