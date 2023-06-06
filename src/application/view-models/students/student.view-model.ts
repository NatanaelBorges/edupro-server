import { Expose } from 'class-transformer';

export class StudentsViewModel {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  active: boolean;

  @Expose()
  createdAt: Date;
}
