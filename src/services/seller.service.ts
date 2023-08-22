import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SellerDTO } from 'src/dto/seller.dto';
import { Seller } from 'src/entities/seller.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SellerService {
    constructor(
        @InjectRepository(Seller)
        private readonly sellerRepo: Repository<Seller>
    ) { }

    async saveSeller(seller: SellerDTO): Promise<SellerDTO> {
        return await this.sellerRepo.save(seller);
    }

    async getSellerById(_id: number): Promise<Seller> {
        const seller = await this.sellerRepo.findOne({
            where: {
                id: _id
            },
            relations: {
                products: true,
            }
        });

        if (!seller) {
            throw new NotFoundException(`Seller with ID ${_id} not found`);
        }

        return seller; // Returns undefined if seller is not found
    }
}
