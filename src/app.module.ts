import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './config/postgres.config';
import { ProductModule } from './modules/product.module';
import { SellerModule } from './modules/seller.module';

@Module({
  imports: [
    ProductModule,
    TypeOrmModule.forRoot(typeormConfig),
    SellerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
