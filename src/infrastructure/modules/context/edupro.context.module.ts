import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '@infrastructure/data/context/edupro.context';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { DataSource } from 'typeorm';
// import databaseConfig from '@infrastructure/helpers/config/database.config';

// const typeOrmConfig = {
//   imports: [
//     ConfigModule.forRoot({
//       load: [databaseConfig],
//     }),
//   ],
//   inject: [ConfigService],
//   useFactory: async (configService: ConfigService) =>
//     configService.get('database'),
//   dataSourceFactory: async (options) => new DataSource(options).initialize(),
// };

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
})
export class EduProContextModule {}
