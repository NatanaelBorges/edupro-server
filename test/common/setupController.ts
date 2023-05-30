import { Test, TestingModule } from '@nestjs/testing';

export class ControllerSetup<TController, TService> {
  private module: TestingModule;
  public controller: TController;
  public service: TService;

  async setup(
    controllerClass: new (...args: any[]) => TController,
    serviceClass: new (...args: any[]) => TService,
  ): Promise<void> {
    this.module = await Test.createTestingModule({
      controllers: [controllerClass],
      providers: [
        { provide: serviceClass, useValue: this.createServiceMock() },
      ],
    }).compile();

    this.controller = this.module.get<TController>(controllerClass);
    this.service = this.module.get<TService>(serviceClass);
  }

  private createServiceMock(): Record<string, jest.Mock> {
    return {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };
  }

  async teardown(): Promise<void> {
    await this.module.close();
  }
}
