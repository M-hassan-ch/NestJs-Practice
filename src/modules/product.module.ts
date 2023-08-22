import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerController } from 'src/controllers/seller.controller';
import { SellerService } from 'src/services/seller.service';
import { ProductController } from '../controllers/product.controller';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';
import { SellerModule } from './seller.module';

@Module({
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Product]), SellerModule],
  providers: [ProductService]
})
export class ProductModule { }
