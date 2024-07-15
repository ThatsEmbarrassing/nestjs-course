import { SchemaFactory } from '@nestjs/mongoose';

import { Review } from './Review';

export const ReviewSchema = SchemaFactory.createForClass(Review);
