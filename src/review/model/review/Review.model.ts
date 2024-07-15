import { Review } from './Review';
import { ReviewSchema } from './Review.schema';

import type { ModelDefinition } from '@nestjs/mongoose';

export const ReviewModel: ModelDefinition = {
  name: Review.name,
  schema: ReviewSchema,
};
