import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Userdto } from './dto/user.dto';
import { User } from './interface';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/get')
  getUsers() {
    return this.userService.get();
    //return {name:'Ankita' ,emailId:'ankita@test.com'}
  }

  @Get('/getuser')
  getUserss() {
    return this.userService.getuser();
    //return {name:'Ankita' ,emailId:'ankita@test.com'}
  }
  
  @Post('/post')
  postusers(@Body() user: Userdto) {
    return this.userService.adduser(user);
  }
  @Post()
  store(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }
  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }
}
