import { Controller, Post, Body, Get, Query, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/public/public.decorator';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findOne(@Request() req) {
    console.log(req.user);
    return this.userService.findOne(req.user.username);
  }

  @Post()
  modifyUser(@Request() req, @Query() body) {
    const { username, danwei, phone } = body;
    return this.userService.modifyUser(req.user.sub, username, danwei, phone);
  }
}
