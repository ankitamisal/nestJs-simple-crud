import { Injectable } from '@nestjs/common';
import { User } from './interface';

@Injectable()
export class UserService {
  public user: User[] = [];

  get(): User[] {
    // return {name:'Ankita misal' ,emailId:'ankita@test.com'}
    return this.user;
  }
  getuser() {
    return { name: 'Ankita misal', emailId: 'ankita@test.com' };
    // return this.user;
  }
  adduser(user: User): User {
    this.user.push(user);
    return user;
  }
}
