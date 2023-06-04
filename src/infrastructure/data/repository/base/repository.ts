import { IRepository } from '@domain/core/interfaces/IRepository';
import { Logger } from '@nestjs/common';
import {
  DeepPartial,
  FindManyOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

interface HasId {
  id: string;
}

export abstract class AbstractRepository<T extends HasId>
  implements IRepository<T>
{
  private readonly logger = new Logger(AbstractRepository.name);

  private entity: Repository<T>;
  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const newStudent = this.entity.create(data);
    return await this.entity.save(newStudent);
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.entity.find(options);
  }

  async findOne(id: any): Promise<T> {
    const options: FindOptionsWhere<T> = {
      id: id,
    };

    return await this.entity.findOneBy(options);
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    const student = await this.findOne(id);

    return await this.entity.save({
      ...student,
      ...data,
    });
  }

  async remove(id: string): Promise<T> {
    const student = await this.findOne(id);

    return await this.entity.remove(student);
  }
}
