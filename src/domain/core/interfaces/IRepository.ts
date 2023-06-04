import { DeepPartial, FindManyOptions } from 'typeorm';

export interface IRepository<T> {
  create(data: DeepPartial<T>): Promise<T>;

  findAll(options?: FindManyOptions<T>): Promise<T[]>;

  findOne(id: string): Promise<T>;

  update(id: string, data: Partial<T>): Promise<T>;

  remove(id: string): Promise<T>;
}
