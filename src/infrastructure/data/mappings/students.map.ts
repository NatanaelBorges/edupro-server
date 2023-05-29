import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@infrastructure/data/mappings/core/entity';

@Entity({ name: 'Student' })
export class Student extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
}
