import { IEntity } from '@domain/core/interfaces/IEntity';
import { Entity } from '@domain/core/models/entity';

export class Students extends Entity<string> implements IEntity {
  protected firstName: string;

  protected lastName: string;

  protected email: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    active: boolean,
    createdAt: Date,
    updatedAt?: Date,
    deleted?: boolean,
  ) {
    super();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deleted = deleted;
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof Students)) return false;

    return this.id === entity.id;
  }
}
