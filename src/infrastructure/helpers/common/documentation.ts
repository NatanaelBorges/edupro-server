import { Type, applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';

export class ApiResponsePayload<T> {
  @ApiProperty({
    description: 'Indicates whether the request was successful',
    type: Number,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Message describing the result of the request',
    type: String,
  })
  message: string;

  @ApiProperty({ description: 'Data payload of the response', type: Object })
  data: T;

  @ApiProperty({
    description: 'Indicates whether the request was successful',
    type: Object,
  })
  errors?: any;

  @ApiProperty({
    description: 'Indicates whether the request was successful',
    type: Date,
  })
  timestamp: Date;

  constructor(data: T, message: string, statusCode: number, errors?: any) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.errors = errors;
    this.timestamp = new Date();
  }
}

export class ApiResponsePayloadPaginated<T> extends ApiResponsePayload<T[]> {
  @ApiProperty({ description: 'Page number' })
  page?: number;

  @ApiProperty({ description: 'Number of items per page' })
  limit?: number;

  @ApiProperty({ description: 'Field to order the results by' })
  orderBy?: string;

  constructor(
    data: T[],
    message: string,
    statusCode: number,
    errors?: any,
    page?: number,
    limit?: number,
    orderBy?: string,
  ) {
    super(data, message, statusCode, errors);
    this.page = page;
    this.limit = limit;
    this.orderBy = orderBy;
  }
}

export const Response = <DataDto extends Type<unknown>>(
  description: string,
  statusCode: number,
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(ApiResponsePayload, dataDto),
    ApiResponse({
      status: statusCode,
      description: description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(ApiResponsePayload) },
          {
            properties: {
              data: {
                $ref: getSchemaPath(dataDto),
              },
            },
          },
        ],
      },
    }),
  );

export const ResponsePaginated = <DataDto extends Type<unknown>>(
  description: string,
  statusCode: number,
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(ApiResponsePayloadPaginated, dataDto),
    ApiResponse({
      status: statusCode,
      description: description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(ApiResponsePayloadPaginated) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
