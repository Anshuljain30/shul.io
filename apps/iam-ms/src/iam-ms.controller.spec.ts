import { Test, TestingModule } from '@nestjs/testing';
import { IamMsController } from './iam-ms.controller';
import { IamMsService } from './iam-ms.service';

describe('IamMsController', () => {
  let iamMsController: IamMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IamMsController],
      providers: [IamMsService],
    }).compile();

    iamMsController = app.get<IamMsController>(IamMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(iamMsController.getHello()).toBe('Hello World!');
    });
  });
});
