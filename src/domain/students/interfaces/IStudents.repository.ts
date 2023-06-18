import { IRepository } from '@domain/core/interfaces/IRepository';
import { StudentsMap } from '@infrastructure/data/mappings/students.map';

export type IStudentsRepository = IRepository<StudentsMap>;
