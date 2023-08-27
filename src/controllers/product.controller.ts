import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDTO } from '../dto/CreateProduct.dto';
import { ProductService } from "../services/product.service";

@ApiTags('Product')
@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @ApiCreatedResponse({
        description: 'Successfully created product'
    })
    @ApiBadRequestResponse({
        description: "Got invalid product details"
    })
    @Post('/:sellerId/create')
    @UsePipes(ValidationPipe)
    async createProduct(@Param('sellerId', ParseIntPipe) sellerId: number, @Body() productDetails: CreateProductDTO): Promise<CreateProductDTO> {

        return await this.productService.saveProduct(productDetails, sellerId);
    }

    @ApiCreatedResponse({
        description: 'Successfully fetched product'
    })
    @ApiNotFoundResponse({
        description: 'Product don\'t exists'
    })
    @Get('/:id')
    async getProductById(@Param('id') _id: number): Promise<CreateProductDTO> {
        return await this.productService.getProductById(_id);
    }

    @ApiCreatedResponse({
        description: 'Successfully fetched seller\'s product'
    })
    @Get('/withSeller/:id')
    async getProductBySellerId(@Param('id') _id: number): Promise<CreateProductDTO[]> {
        return this.productService.getProductBySellerId(_id);
    }

}
