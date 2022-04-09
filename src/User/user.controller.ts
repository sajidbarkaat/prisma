import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('signup')
    async create(
        @Body() userData: { fName: string; mName?: string, lName: string, username: string, password: string },
    ): Promise<User> {
        return this.userService.create(userData);
    }    
}
