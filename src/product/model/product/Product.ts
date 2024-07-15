import { Prop, Schema } from '@nestjs/mongoose';

class ProductCharacteristics {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

@Schema()
export class Product {
  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  oldPrice: number;

  @Prop()
  credit: number;

  @Prop()
  calculatedRating: number;

  @Prop()
  description: string;

  @Prop()
  advantagesDescription: string;

  @Prop()
  disadvantagesDescription: string;

  @Prop({ type: [String] })
  categories: string[];

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ type: [ProductCharacteristics], _id: false })
  characteristics: ProductCharacteristics[];
}
