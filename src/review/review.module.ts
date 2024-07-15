import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { ReviewModel } from './model';

import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [MongooseModule.forFeature([ReviewModel])],
})
export class ReviewModule {}
