import { Test, TestingModule } from '@nestjs/testing';
import { StestService } from './stest.service';

describe('StestService', () => {
  let service: StestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StestService],
    }).compile();

    service = module.get<StestService>(StestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
