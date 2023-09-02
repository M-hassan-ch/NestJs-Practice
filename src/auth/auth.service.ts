import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { SellerService } from 'src/services/seller.service';
import * as bcrypt from 'bcrypt'
import { Seller } from 'src/entities/seller.entity';
import { JwtService } from '@nestjs/jwt';
import { ethers } from 'ethers';

@Injectable()
export class AuthService {
    constructor(private readonly sellerService: SellerService, private readonly jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<Seller> {
        const user = await this.sellerService.getSellerByEmail(email);

        if (!user) {
            throw new BadRequestException();
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedException();
        }

        return user;
    }

    async generateToken(user: Seller): Promise<{ accessToken: string }> {
        return {
            accessToken: await this.jwtService.sign({
                email: user.email,
                id: user.id
            })
        }
    }

    async isValidUserWallet(obj: { msg: string, sig: string, caller: string }): Promise<boolean> {
        const signer = await ethers.verifyMessage(obj.msg, obj.sig);

        if (signer.toLowerCase() == obj.caller.toLowerCase()) {
            return true
        }
        return false;
    }

    async generateTokenWithWallet(msg: String): Promise<{ accessToken: string }> {
        return {
            accessToken: await this.jwtService.sign({
                message: msg
            })
        }
    }
}
