import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from '@infrastructure/modules/app/students.module';
import { EduProContextModule } from '@infrastructure/modules/context/edupro.context.module';
import { setEnvironment } from '@infrastructure/helpers/environments/environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      cache: true,
      envFilePath: setEnvironment(),
    }),
    EduProContextModule,
    StudentsModule,
  ],
})
export class RootModule {}
