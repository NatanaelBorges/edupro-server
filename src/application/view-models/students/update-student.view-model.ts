import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentViewModel } from '@application/view-models/students/create-student.view-model';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateStudentViewModel extends PartialType(
  CreateStudentViewModel,
) {
  @ApiProperty({ description: 'First name of the student', type: String })
  firstName?: string;

  @ApiProperty({ description: 'Last name of the student', type: String })
  lastName?: string;

  @ApiProperty({ description: 'Email of the student', type: String })
  email?: string;
}
