import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from '@infrastructure/data/repository/base/repository';
import { Repository } from 'typeorm';
import { Student } from '@infrastructure/data/mappings/students.map';
import { IStudentsRepository } from '@domain/students/interfaces/IStudents.repository';

export class StudentsRepository
  extends AbstractRepository<Student>
  implements IStudentsRepository
{
  constructor(
    @InjectRepository(Student)
    private readonly _studentsRepository: Repository<Student>,
  ) {
    super(_studentsRepository);
  }
}
