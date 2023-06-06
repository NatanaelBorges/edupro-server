import { Optional } from '@domain/core/type/commonTypes';
import { Exception } from '@domain/core/exception/exception';
import { Code } from '@infrastructure/helpers/common/code';
import {
  ClassValidationDetails,
  ClassValidator,
} from '@infrastructure/helpers/common/classValidator';

export class Entity<TIdentifier extends string | number> {
  protected id: Optional<TIdentifier>;

  protected active: boolean;

  protected createdAt: Date;

  protected updatedAt: Date;

  protected deleted: boolean;

  public getId(): TIdentifier {
    if (typeof this.id === 'undefined') {
      throw Exception.new({
        code: Code.ENTITY_VALIDATION_ERROR,
        overrideMessage: `${this.constructor.name}: ID is empty.`,
      });
    }

    return this.id;
  }

  public async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> =
      await ClassValidator.validate(this);
    if (details) {
      throw Exception.new({
        code: Code.ENTITY_VALIDATION_ERROR,
        data: details,
      });
    }
  }
}
