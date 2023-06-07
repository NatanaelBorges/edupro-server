import { Logger, VersioningType } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import 'dotenv/config';
import { RootModule } from '@infrastructure/modules/root.module';
import { ApiServerConfig } from '@infrastructure/helpers/config/api.server.config';
import { CustomValidationPipe } from '@infrastructure/pipes/validation.pipe';
import { HttpExceptionFilter } from '@infrastructure/filters/http-exception.filter';
import helmet from 'helmet';

export class ServerApplication {
  private readonly host: string = ApiServerConfig.HOST;

  private readonly port: number = Number(ApiServerConfig.PORT);

  public async run(): Promise<void> {
    try {
      const app: NestExpressApplication =
        await NestFactory.create<NestExpressApplication>(RootModule);

      app.useGlobalPipes(new CustomValidationPipe());
      app.useGlobalFilters(new HttpExceptionFilter());

      app.enableCors();
      app.use(helmet());

      this.log();
      this.buildAPIVersioning(app);
      this.buildAPIDocumentation(app);

      await app.listen(this.port, this.host);
    } catch (error) {
      Logger.error(`❌  Error starting server, ${error}`, 'Bootstrap');
      process.exit();
    }
  }

  private log(): void {
    Logger.log(
      `Environment: ${process.env.NODE_ENV?.toUpperCase()}`,
      'Bootstrap',
    );

    Logger.log(
      `🚀  Server ready at http://${this.host}:${this.port}`,
      'Bootstrap',
    );
  }

  private buildAPIVersioning(app: NestExpressApplication): void {
    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: '1',
      prefix: 'api/v',
    });
  }

  private buildAPIDocumentation(app: NestExpressApplication): void {
    const title = ApiServerConfig.APP_NAME;
    const description = ApiServerConfig.APP_DESCRIPTION;
    const version = ApiServerConfig.API_VERSION;

    const options: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addBearerAuth({
        type: 'apiKey',
        in: 'header',
        name: ApiServerConfig.API_ACCESS_TOKEN_HEADER,
      })
      .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('documentation', app, document);
    SwaggerModule.setup('docs', app, document);

    Logger.log(
      'Mapped {/documentation, GET} Swagger api route',
      'RouterExplorer',
    );
    Logger.log('Mapped {/docs, GET} Swagger api route', 'RouterExplorer');
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}
