import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeormConfig } from './config/postgres.config';
import { Test1Module } from './modules/product.module';

@Module({
  imports: [
    Test1Module,
    TypeOrmModule.forRoot(typeormConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
