import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDTO } from '../dto/CreateProduct.dto';
import { StestService } from "../services/product.service";

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
    async createProduct(@Body() productDetails: CreateProductDTO): Promise<CreateProductDTO> {
        return await this.testService.saveProduct(productDetails);
    }

}
