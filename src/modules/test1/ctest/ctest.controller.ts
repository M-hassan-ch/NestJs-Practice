import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDTO } from '../dto/CreateProduct.dto';
import { StestService } from "../stest/stest.service";

@Controller('testModule')
export class CtestController {

    constructor(private readonly testService: StestService) { }

    @Get('/')
    getSomething(): string {
        return "this is something from a custom controller in a custom module";
    }

    @Get('/something')
    getSomethingFromService(): string {
        return this.testService.getSomething();
    }

    @Post('/createProduct')
    @UsePipes(ValidationPipe)
    createProduct(@Body() productDetails: CreateProductDTO): { data: CreateProductDTO } {
        return { data: productDetails }
    }

}
