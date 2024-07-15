import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Types } from 'mongoose';

import { ReviewModel, ReviewSchema } from './model';

import type { Model } from 'mongoose';

import type { DeleteResult } from 'mongodb';

import type { CreateReviewDto } from './dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name) private readonly reviewModel: Model<typeof ReviewSchema>,
  ) {}

  create(dto: CreateReviewDto): Promise<typeof ReviewSchema> {
    return this.reviewModel.create(dto);
  }

  delete(id: string): Promise<typeof ReviewSchema> | null {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  findByProductId(id: string): Promise<(typeof ReviewSchema)[]> {
    return this.reviewModel.find({ productId: new Types.ObjectId(id) }).exec();
  }

  deleteByProductId(id: string): Promise<DeleteResult> {
    return this.reviewModel.deleteMany({ productId: new Types.ObjectId(id) }).exec();
  }
}
