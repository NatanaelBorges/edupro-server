import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentViewModel } from '@application/view-models/students/create-student.view-model';

export class UpdateStudentViewModel extends PartialType(
  CreateStudentViewModel,
) {}
