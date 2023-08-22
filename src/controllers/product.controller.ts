import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDTO } from '../dto/CreateProduct.dto';
import { ProductService } from "../services/product.service";

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get('/')
    getSomething(): string {
        return "this is something from a custom controller in a custom module";
    }

    @Get('/something')
    getSomethingFromService(): string {
        return this.productService.getSomething();
    }

    @Post('/:sellerId/create')
    @UsePipes(ValidationPipe)
    async createProduct(@Param('sellerId', ParseIntPipe) sellerId: number, @Body() productDetails: CreateProductDTO): Promise<CreateProductDTO> {
        
        return await this.productService.saveProduct(productDetails, sellerId);
        // return productDetails;
    }

    @Get('/:id')
    async getProductById(@Param('id') _id: number): Promise<CreateProductDTO> {
        console.log("getting, ", _id);
        return await this.productService.getProductById(_id);
    }

    @Get('/withSeller/:id')
    async getProductBySellerId(@Param('id') _id: number): Promise<CreateProductDTO[]> {
        return this.productService.getProductBySellerId(_id);
    }

}
