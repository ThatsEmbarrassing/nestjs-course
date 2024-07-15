import { SchemaFactory } from '@nestjs/mongoose';

import { Auth } from './Auth';

export const AuthSchema = SchemaFactory.createForClass(Auth);
