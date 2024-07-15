import { Module } from '@nestjs/common';

import { AuthModel } from './model';

import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AuthController],
  imports: [MongooseModule.forFeature([AuthModel])],
})
export class AuthModule {}
