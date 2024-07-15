import { Prop } from '@nestjs/mongoose';

import { HHVanancySalary } from './HHVanalcySalary';

export class HHVacancies {
  @Prop()
  count: number;

  @Prop({ type: [HHVanancySalary] })
  salaries: HHVanancySalary[];
}
