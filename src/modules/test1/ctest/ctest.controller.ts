import { Controller, Get } from '@nestjs/common';
import { StestService } from "../stest/stest.service";

@Controller('testModule')
export class CtestController {

    constructor(private readonly testService : StestService){}

    @Get('/')
    getSomething(): string {
        return "this is something from a custom controller in a custom module";
    }

    @Get('/something')
    getSomethingFromService(): string{
        return this.testService.getSomething();
    }

}
