import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Userdto {
  //   @IsString()
  @IsEmail()
  @IsDefined()
  email: string;
  //   @IsString()
  @IsDefined()
  username: string;
}
