import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/postgres.config';
import { ProductModule } from './modules/product.module';
import { SellerModule } from './modules/seller.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    SellerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
