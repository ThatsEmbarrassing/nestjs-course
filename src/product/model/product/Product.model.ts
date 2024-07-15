import { Product } from './Product';
import { ProductSchema } from './Product.schema';

import type { ModelDefinition } from '@nestjs/mongoose';

export const ProductModel: ModelDefinition = {
  name: Product.name,
  schema: ProductSchema,
};
