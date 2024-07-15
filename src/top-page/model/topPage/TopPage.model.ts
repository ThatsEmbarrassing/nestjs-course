import { TopPage } from './TopPage';
import { TopPageSchema } from './TopPage.schema';

import type { ModelDefinition } from '@nestjs/mongoose';

export const TopPageModel: ModelDefinition = {
  name: TopPage.name,
  schema: TopPageSchema,
};
