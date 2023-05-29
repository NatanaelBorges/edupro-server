import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from '@application/services/students.service';
import { CreateStudentViewModel } from '@application/view-models/students/create-student.view-model';
import { UpdateStudentViewModel } from '@application/view-models/students/update-student.view-model';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentViewModel: CreateStudentViewModel) {
    return this.studentsService.create(createStudentViewModel);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentViewModel: UpdateStudentViewModel,
  ) {
    return this.studentsService.update(id, updateStudentViewModel);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
