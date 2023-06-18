import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateStudentViewModel } from '@application/view-models/students/create-student.view-model';
import { UpdateStudentViewModel } from '@application/view-models/students/update-student.view-model';
import { StudentsIoCTokens } from '@infrastructure/ioc/students/students.IoC.Tokens';
import { IStudentsRepository } from '@domain/students/interfaces/IStudents.repository';
import { StudentMappingProfile } from '@application/autoMapper/students.mapping.profile';
import { StudentFilter } from '@application/view-models/students/student.view-model';
import { IStudentsService } from '@application/interfaces/IStudents.service';

@Injectable()
export class StudentsService implements IStudentsService {
  private readonly logger = new Logger(StudentsService.name);
  constructor(
    @Inject(StudentsIoCTokens.IStudentsRepository)
    private readonly _studentsRepository: IStudentsRepository,
  ) {}

  async create(createStudentViewModel: CreateStudentViewModel) {
    return StudentMappingProfile.toEntityViewModel(
      await this._studentsRepository.create(createStudentViewModel),
    );
  }

  async findAll(filter: StudentFilter) {
    return StudentMappingProfile.toEntityViewModels(
      await this._studentsRepository.findAll(),
    );
  }

  async findOne(id: string) {
    const student = await this._studentsRepository.findOne(id);

    return student ? StudentMappingProfile.toEntityViewModel(student) : null;
  }

  async update(id: string, updateStudentViewModel: UpdateStudentViewModel) {
    return StudentMappingProfile.toEntityViewModel(
      await this._studentsRepository.update(id, updateStudentViewModel),
    );
  }

  async remove(id: string) {
    return StudentMappingProfile.toEntityViewModel(
      await this._studentsRepository.remove(id),
    );
  }
}
