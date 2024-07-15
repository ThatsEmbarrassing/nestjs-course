import { Auth } from './Auth';
import { AuthSchema } from './Auth.schema';

import type { ModelDefinition } from '@nestjs/mongoose';

export const AuthModel: ModelDefinition = {
  name: Auth.name,
  schema: AuthSchema,
};
