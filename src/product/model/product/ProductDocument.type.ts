import type { HydratedDocument } from 'mongoose';

import type { Product } from './Product';

export type ProductDocument = HydratedDocument<Product>;
