import type { ConfigService } from '@nestjs/config';

import type { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

const getMongoURI = (configService: ConfigService): string => {
  const MONGODB_LOGIN = configService.get('MONGODB_LOGIN');
  const MONGODB_PASSWORD = configService.get('MONGODB_PASSWORD');
  const MONGODB_AUTHDATABASE = configService.get('MONGODB_AUTHDATABASE');
  const MONGODB_HOST = configService.get('MONGODB_HOST');
  const MONGODB_PORT = configService.get('MONGODB_PORT');

  const res = `mongodb://${MONGODB_LOGIN}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/?authSource=${MONGODB_AUTHDATABASE}`;

  return res;
};

const getMongoOptions = (): MongooseModuleFactoryOptions => {
  return {
    autoIndex: true,
  };
};

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleFactoryOptions> => ({
  uri: getMongoURI(configService),
  ...getMongoOptions(),
});
