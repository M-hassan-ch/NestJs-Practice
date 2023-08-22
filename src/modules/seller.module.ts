import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerController } from 'src/controllers/seller.controller';
import { Seller } from 'src/entities/seller.entity';
import { SellerService } from 'src/services/seller.service';


@Module({
    controllers: [SellerController],
    imports: [TypeOrmModule.forFeature([Seller])],
    providers: [SellerService],
    exports: [SellerService]
})

export class SellerModule { }
