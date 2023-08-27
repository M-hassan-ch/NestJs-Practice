import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SellerModule } from 'src/modules/seller.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { localStrategy } from './local.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, localStrategy, JwtStrategy],
  imports: [SellerModule, PassportModule, JwtModule.register({
    secret: 'hassan123',
    signOptions: { expiresIn: '1d' },
  })]
})
export class AuthModule { }
