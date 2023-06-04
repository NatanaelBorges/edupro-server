import { IRepository } from '@domain/core/interfaces/IRepository';
import { Student } from '@infrastructure/data/mappings/students.map';

export type IStudentsRepository = IRepository<Student>;
