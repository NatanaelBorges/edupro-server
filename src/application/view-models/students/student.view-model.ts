import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BaseStudent {
  @Expose()
  @ApiProperty({
    required: false,
    description: 'First name of the student',
    type: String,
  })
  firstName: string;

  @Expose()
  @ApiProperty({
    required: false,
    description: 'Last name of the student',
    type: String,
  })
  lastName: string;

  @Expose()
  @ApiProperty({
    required: false,
    description: 'Email of the student',
    type: String,
  })
  email: string;

  @Expose()
  @ApiProperty({ required: false, description: 'Active', type: Boolean })
  active: boolean;
}

export class StudentsViewModel extends BaseStudent {
  @Expose()
  @ApiProperty({ required: false, description: 'Student id', type: String })
  id: string;

  @Expose()
  @ApiProperty({
    required: false,
    description: 'Student creation date',
    type: Date,
  })
  createdAt: Date;
}

export class StudentFilter extends BaseStudent {
  @ApiProperty({ required: false, default: 1 })
  page?: number;

  @ApiProperty({ required: false, default: 10 })
  limit?: number;

  @ApiProperty({ required: false, default: 'DESC' })
  orderBy?: string;
}
