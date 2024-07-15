import { Schema, Prop } from '@nestjs/mongoose';

import { TopLevelCategory } from './TopLevelCategory.enum';

import { HHVacancies } from './HHVacancies';
import { TopPageAdvantage } from './TopPageAdvantage';

@Schema({ timestamps: true })
export class TopPage {
  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  seoText: string;

  @Prop({ unique: true })
  alias: string;

  @Prop()
  tagsTitle: string;

  @Prop()
  secondLevelCategory: string;

  @Prop({ enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ type: HHVacancies })
  hh?: HHVacancies;

  @Prop({ type: [TopPageAdvantage] })
  advantages: TopPageAdvantage[];
}
