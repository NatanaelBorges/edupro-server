import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from '@application/services/students.service';
import { StudentsController } from '@controller/v1/students.controller';
import { Student } from '@infrastructure/data/mappings/students.map';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
