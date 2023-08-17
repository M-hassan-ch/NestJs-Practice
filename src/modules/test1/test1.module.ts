import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtestController } from './ctest/ctest.controller';
import { Product } from './product.entity';
import { StestService } from './stest/stest.service';

@Module({
  controllers: [CtestController],
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [StestService]
})
export class Test1Module {}
