import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpException,
  Query,
  UsePipes,
  Inject,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateStudentViewModel } from '@application/view-models/students/create-student.view-model';
import { UpdateStudentViewModel } from '@application/view-models/students/update-student.view-model';
import {
  Response,
  ApiResponsePayload,
  ResponsePaginated,
} from '@infrastructure/helpers/common/documentation';
import {
  StudentFilter,
  StudentsViewModel,
} from '@application/view-models/students/student.view-model';
import { CustomValidationPipe } from '@infrastructure/pipes/validation.pipe';
import { IStudentsService } from '@application/interfaces/IStudents.service';
import { StudentsIoCTokens } from '@infrastructure/ioc/students/students.IoC.Tokens';

@ApiTags('Student')
@Controller('students')
@UsePipes(new CustomValidationPipe())
export class StudentsController {
  constructor(
    @Inject(StudentsIoCTokens.IStudentsService)
    private readonly _studentsService: IStudentsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create student' })
  @Response('Student created', HttpStatus.CREATED, StudentsViewModel)
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Student already exists',
    type: ApiResponsePayload,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Validation error',
    type: ApiResponsePayload,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: ApiResponsePayload,
  })
  async create(
    @Body() createStudentViewModel: CreateStudentViewModel,
  ): Promise<ApiResponsePayload<StudentsViewModel>> {
    const createdStudent = await this._studentsService.create(
      createStudentViewModel,
    );

    return new ApiResponsePayload<StudentsViewModel>(
      createdStudent,
      'Student created',
      HttpStatus.CREATED,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all students' })
  @ResponsePaginated('Success', HttpStatus.OK, StudentsViewModel)
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'No students found',
    type: ApiResponsePayload,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: ApiResponsePayload,
  })
  async findAll(
    @Query() filter: StudentFilter,
  ): Promise<ApiResponsePayload<StudentsViewModel[]>> {
    const students = await this._studentsService.findAll(filter);

    if (students.length == 0) {
      throw new HttpException(
        new ApiResponsePayload<StudentsViewModel[]>(
          null,
          'No students found',
          HttpStatus.NOT_FOUND,
        ),
        HttpStatus.NOT_FOUND,
      );
    }

    return new ApiResponsePayload<StudentsViewModel[]>(
      students,
      'Success',
      HttpStatus.OK,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get student by ID' })
  @Response('Success', HttpStatus.OK, StudentsViewModel)
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Student not found',
    type: ApiResponsePayload,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Validation error',
    type: ApiResponsePayload,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: ApiResponsePayload,
  })
  async findOne(
    @Param('id') id: string,
  ): Promise<ApiResponsePayload<StudentsViewModel>> {
    const student = await this._studentsService.findOne(id);

    if (!student) {
      throw new HttpException(
        new ApiResponsePayload<StudentsViewModel>(
          null,
          'Student not found',
          HttpStatus.NOT_FOUND,
        ),
        HttpStatus.NOT_FOUND,
      );
    }

    return new ApiResponsePayload<StudentsViewModel>(
      student,
      'Success',
      HttpStatus.OK,
    );
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update student by ID' })
  @Response('Student updated', HttpStatus.NO_CONTENT, StudentsViewModel)
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Student not found',
    type: ApiResponsePayload,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Validation error',
    type: ApiResponsePayload,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: ApiResponsePayload,
  })
  async update(
    @Param('id') id: string,
    @Body() updateStudentViewModel: UpdateStudentViewModel,
  ): Promise<ApiResponsePayload<StudentsViewModel>> {
    const updatedStudent = await this._studentsService.update(
      id,
      updateStudentViewModel,
    );

    if (!updatedStudent) {
      throw new HttpException(
        new ApiResponsePayload<StudentsViewModel>(
          null,
          'Student not found',
          HttpStatus.NOT_FOUND,
        ),
        HttpStatus.NOT_FOUND,
      );
    }

    throw new HttpException(
      new ApiResponsePayload<StudentsViewModel>(
        updatedStudent,
        'Student updated',
        HttpStatus.NO_CONTENT,
      ),
      HttpStatus.NO_CONTENT,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete student by ID' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Student deleted',
    type: ApiResponsePayload,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Student not found',
    type: ApiResponsePayload,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: ApiResponsePayload,
  })
  async remove(
    @Param('id') id: string,
  ): Promise<ApiResponsePayload<StudentsViewModel>> {
    const deletedStudent = await this._studentsService.remove(id);

    if (!deletedStudent) {
      throw new HttpException(
        new ApiResponsePayload<StudentsViewModel>(
          null,
          'Student not found',
          HttpStatus.NOT_FOUND,
        ),
        HttpStatus.NOT_FOUND,
      );
    }

    throw new HttpException(
      new ApiResponsePayload<StudentsViewModel>(
        null,
        'Student deleted',
        HttpStatus.NO_CONTENT,
      ),
      HttpStatus.NO_CONTENT,
    );
  }
}
