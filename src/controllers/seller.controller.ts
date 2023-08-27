import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SellerDTO } from 'src/dto/seller.dto';
import { SellerService } from 'src/services/seller.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Seller')
@Controller('seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService) { }

    @ApiCreatedResponse({
        description: 'Successfully registered seller'
    })
    @ApiBadRequestResponse({
        description: "Got invalid seller details"
    })
    @Post('/register')
    @UsePipes(ValidationPipe)
    async createProduct(@Body() sellerDetails: SellerDTO): Promise<SellerDTO> {
        return await this.sellerService.saveSeller(sellerDetails);
    }

    @ApiCreatedResponse({
        description: 'Successfully fetched seller'
    })
    @ApiNotFoundResponse({
        description: 'Seller don\'t exists'
    })
    @Get('/:id')
    async getSellerById(@Param('id') _id: number): Promise<SellerDTO> {
        return await this.sellerService.getSellerById(_id);
    }
}
