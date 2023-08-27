import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }
    // @UseGuards(localAuthGuard)
    @ApiCreatedResponse({
        description: 'Successfully authenticated user'
    })
    @ApiBadRequestResponse({
        description: "User don't exists"
    })
    @ApiUnauthorizedResponse({
        description: "Invalid password"
    })
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req) {
        return await this.authService.generateToken(req.user);
    }

    @ApiUnauthorizedResponse({
        description: "Invalid jwt token"
    })
    @UseGuards(AuthGuard('jwt'))
    @Get('/user')
    async getUser(@Request() req) {
        return req.user;
    }
}
