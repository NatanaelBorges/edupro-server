import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from '@application/services/students.service';
import { StudentsController } from '@controller/v1/students.controller';
import { Student } from '@infrastructure/data/mappings/students.map';
import { StudentsIoCTokens } from '@infrastructure/ioc/students/students.IoC.Tokens';
import { StudentsRepository } from '@infrastructure/data/repository/students.repository';

const providers: Provider[] = [
  {
    provide: StudentsIoCTokens.IStudentsRepository,
    useClass: StudentsRepository,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService, ...providers],
})
export class StudentsModule {}
