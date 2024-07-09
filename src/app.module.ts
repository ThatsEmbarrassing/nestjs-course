import { Module } from '@nestjs/common';

import { ScheduleModule } from './schedule';
import { RoomModule } from './room';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ScheduleModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
