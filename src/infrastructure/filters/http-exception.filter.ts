import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiResponsePayload } from '@infrastructure/helpers/common/documentation';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception.getStatus() === 500) {
      Logger.log('Internal Server Error:', exception.message);

      response
        .status(exception.getStatus())
        .json(
          new ApiResponsePayload(
            null,
            'Internal Server Error',
            HttpStatus.INTERNAL_SERVER_ERROR,
            exception.message || 'Internal Server Error',
          ),
        );
    } else {
      response.status(exception.getStatus()).json(exception.getResponse());
    }
  }
}
