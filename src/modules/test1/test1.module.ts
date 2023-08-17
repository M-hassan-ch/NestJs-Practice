import { Module } from '@nestjs/common';
import { CtestController } from './ctest/ctest.controller';

@Module({
  controllers: [CtestController]
})
export class Test1Module {}
