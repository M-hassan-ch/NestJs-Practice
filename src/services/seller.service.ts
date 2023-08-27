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
        const newSeller = new Seller();
        newSeller.email = seller.email;
        newSeller.password = seller.password;
  
        return await this.sellerRepo.save(newSeller);
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

    async getSellerByEmail(_email: string): Promise<Seller> {
        const seller = await this.sellerRepo.findOne({
            where: {
                email: _email
            }
        });

        if (!seller) {
            throw new NotFoundException(`Seller with email ${_email} not found`);
        }

        return seller; // Returns undefined if seller is not found
    }
}
