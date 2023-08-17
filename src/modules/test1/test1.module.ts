import { Module } from '@nestjs/common';
import { CtestController } from './ctest/ctest.controller';
import { StestService } from './stest/stest.service';

@Module({
  controllers: [CtestController],
  providers: [StestService]
})
export class Test1Module {}
