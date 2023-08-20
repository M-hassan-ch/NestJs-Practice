import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CtestController } from '../controllers/product.controller';
import { Product } from '../entities/product.entity';
import { StestService } from '../services/product.service';

@Module({
  controllers: [CtestController],
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [StestService]
})
export class Test1Module {}
