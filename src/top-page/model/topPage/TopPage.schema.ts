import { SchemaFactory } from '@nestjs/mongoose';
import { TopPage } from './TopPage';

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
