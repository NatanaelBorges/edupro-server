import { ApiResponsePayload } from '@infrastructure/helpers/common/documentation';
import {
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export class CustomValidationPipe {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length) {
      const formattedErrors = errors.map((error) => {
        const { property, constraints } = error;
        return {
          field: property,
          message: Object.values(constraints)[0],
        };
      });

      throw new BadRequestException(
        new ApiResponsePayload(
          null,
          'Validation error',
          HttpStatus.BAD_REQUEST,
          formattedErrors,
        ),
      );
    }

    return value;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
