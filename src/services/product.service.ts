import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDTO } from '../dto/CreateProduct.dto';
import { Product } from '../entities/product.entity';
import { SellerService } from './seller.service';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product>,
        private readonly sellerService: SellerService
    ) { }

    getSomething(): string {
        return "this is something from services of custom module through custum controller";
    }

    async getProductBySellerId(sellerId: number): Promise<CreateProductDTO[]> {
        return this.productRepo.find({
            where: {
                seller: { id: sellerId }
            },
            relations:{
                seller: true
            }
        });
    }

    // async saveProduct(product: CreateProductDTO): Promise<CreateProductDTO> {
    //     return await this.productRepo.save(product);
    // }

    async saveProduct(createProductDto: CreateProductDTO, sellerId: number): Promise<CreateProductDTO> {
        const product = this.productRepo.create(createProductDto);

        const seller = await this.sellerService.getSellerById(sellerId);

        product.seller = seller;

        return this.productRepo.save(product);
    }

    async getProductById(_id: number): Promise<CreateProductDTO> {
        const product = await this.productRepo.findOneBy({
            id: _id
        });

        if (!product) {
            throw new NotFoundException(`product with ID ${_id} not found`);
        }
        
        return product
    }


}
