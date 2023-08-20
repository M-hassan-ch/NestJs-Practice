import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDTO } from '../dto/CreateProduct.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class StestService {
    
    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product> 
    ){}
    
    getSomething(): string {
        return "this is something from services of custom module through custum controller";
    }

    async saveProduct(product : CreateProductDTO): Promise<CreateProductDTO>{
        return await this.productRepo.save(product);
    }

}
