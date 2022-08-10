import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller()
export class AppController{
 @Get()
    getUsers()
    {
        return {name:'Ankita' ,emailId:'ankita@test.com'}
    }
    @Post()
    store(@Req() req:Request)
    {
        console.log(req.body);
        return req.body;
    }   
    @Get('/:userId')
    getUser(@Param() params:{ userId: number}){

        return params;
    }

    @Delete('/:userId')
    deleteUser(@Param() params:{ userId: number}){
        return params;
    }
    @Patch('/:userId')
    updateUser(@Req() req: Request){
        return req.body;
    }
   
}
