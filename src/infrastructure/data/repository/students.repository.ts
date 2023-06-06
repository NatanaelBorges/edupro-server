import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from '@infrastructure/data/repository/base/repository';
import { Repository } from 'typeorm';
import { StudentsMap } from '@infrastructure/data/mappings/students.map';
import { IStudentsRepository } from '@domain/students/interfaces/IStudents.repository';

export class StudentsRepository
  extends AbstractRepository<StudentsMap>
  implements IStudentsRepository
{
  constructor(
    @InjectRepository(StudentsMap)
    private readonly _studentsRepository: Repository<StudentsMap>,
  ) {
    super(_studentsRepository);
  }
}
