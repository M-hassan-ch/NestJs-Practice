import { Test, TestingModule } from '@nestjs/testing';
import { CtestController } from './ctest.controller';

describe('CtestController', () => {
  let controller: CtestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtestController],
    }).compile();

    controller = module.get<CtestController>(CtestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
