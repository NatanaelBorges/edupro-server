import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@infrastructure/data/mappings/core/entity';

@Entity({ name: 'Students' })
export class StudentsMap extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;
}
