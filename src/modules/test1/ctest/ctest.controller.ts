import { Controller, Get } from '@nestjs/common';

@Controller('testModule')
export class CtestController {
    @Get('/something')
    getSomething(): string {
        return "this is something from a custom controller in a custom module";
    }
}
