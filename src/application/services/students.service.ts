import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentViewModel } from '@application/view-models/students/create-student.view-model';
import { UpdateStudentViewModel } from '@application/view-models/students/update-student.view-model';
import { Student } from '@infrastructure/data/mappings/students.map';

@Injectable()
export class StudentsService {
  private readonly logger = new Logger(StudentsService.name);
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  create(createStudentViewModel: CreateStudentViewModel) {
    this.logger.log(`create the students`);
    const newStudent = this.studentRepository.create(createStudentViewModel);

    return this.studentRepository.save(newStudent);
  }

  findAll() {
    this.logger.log(`Find the students`);
    return this.studentRepository.find();
  }

  findOne(id: string) {
    return this.studentRepository.findOneBy({ id });
  }

  async update(id: string, updateStudentViewModel: UpdateStudentViewModel) {
    const student = await this.studentRepository.findOneBy({ id });

    return this.studentRepository.save({
      ...student,
      ...updateStudentViewModel,
    });
  }

  async remove(id: string) {
    const student = await this.studentRepository.findOneBy({ id });

    return this.studentRepository.remove(student);
  }
}
