import { Controller } from '@nestjs/common';

import type { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
}
