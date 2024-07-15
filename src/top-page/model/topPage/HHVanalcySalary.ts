import { Prop } from '@nestjs/mongoose';

export class HHVanancySalary {
  @Prop()
  name: string;

  @Prop()
  salary: number;
}
