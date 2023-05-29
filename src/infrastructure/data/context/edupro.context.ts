import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { TypeOrmDirectory } from '@infrastructure/helpers/typeorm/typeorm-directory';

dotenv.config({
  path:
    process.env.NODE_ENV !== undefined
      ? `.env.${process.env.NODE_ENV.trim()}`
      : '.env.development',
});

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [`${TypeOrmDirectory}/migrations/*.js`],
  entities: [`${TypeOrmDirectory}/mappings/*.map.js`],
  synchronize: false,
  logging: process.env.DB_LOG_ENABLE ? 'all' : false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
