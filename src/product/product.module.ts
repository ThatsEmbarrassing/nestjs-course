import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModel } from './model';

import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  imports: [MongooseModule.forFeature([ProductModel])],
})
export class ProductModule {}
