import { SchemaFactory } from '@nestjs/mongoose';

import { Product } from './Product';

export const ProductSchema = SchemaFactory.createForClass(Product);
