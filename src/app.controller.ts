import { Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/something')
  getSomething(): string {
    return "this is something";
  }

  @Get('/appService/something')
  getSomethingFromAppService(): string {
    return this.appService.getSomething();
  }
}

