import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }
    // @UseGuards(localAuthGuard)
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req) {
        return await this.authService.generateToken(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/user')
    async getUser(@Request() req) {
        return req.user;
    }
}
