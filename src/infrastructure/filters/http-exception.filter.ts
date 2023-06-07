import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiResponsePayload } from '@infrastructure/helpers/common/documentation';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof Error
        ? HttpStatus.INTERNAL_SERVER_ERROR
        : exception.getStatus();

    const apiResponse = new ApiResponsePayload(
      null,
      'Internal Server Error',
      status,
      exception.message || 'Internal Server Error',
    );

    response.status(status).json(apiResponse);
  }
}
