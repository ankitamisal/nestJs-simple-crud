// import {  IsEmail, IsNotEmpty } from "class-validator";

export interface User {
    // @IsEmail()
  email: string;
// @IsNotEmpty()
  username: string;
}
