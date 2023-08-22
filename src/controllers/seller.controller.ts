import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SellerDTO } from 'src/dto/seller.dto';
import { SellerService } from 'src/services/seller.service';

@Controller('seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService){}

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createProduct(@Body() sellerDetails: SellerDTO): Promise<SellerDTO> {
        return await this.sellerService.saveSeller(sellerDetails);
    }

    @Get('/:id')
    async getSellerById(@Param('id') _id: number): Promise<SellerDTO>{ 
        return await this.sellerService.getSellerById(_id);
    }
}
