import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
export class CreateStudentViewModel {
  @ApiProperty({ description: 'First name of the student', type: String })
  @IsString()
  @Length(2, 10, { message: 'First name must be between 2 and 10 characters' })
  firstName: string;

  @ApiProperty({ description: 'Last name of the student', type: String })
  @IsString()
  @Length(2, 20, { message: 'Last name must be between 2 and 20 characters' })
  lastName: string;

  @ApiProperty({ description: 'Email of the student', type: String })
  @IsString()
  @IsEmail()
  email: string;
}
