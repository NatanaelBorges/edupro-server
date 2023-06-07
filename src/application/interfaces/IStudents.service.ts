import { CreateStudentViewModel } from '@application/view-models/students/create-student.view-model';
import { StudentFilter } from '@application/view-models/students/student.view-model';
import { UpdateStudentViewModel } from '@application/view-models/students/update-student.view-model';

export interface IStudentsService {
  create(createStudentViewModel: CreateStudentViewModel);

  findAll(filter: StudentFilter);

  findOne(id: string);

  update(id: string, updateStudentViewModel: UpdateStudentViewModel);

  remove(id: string);
}
