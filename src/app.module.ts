import { Module } from '@nestjs/common';
import { AppController } from './app.controllers';
import { UserModule } from './user/user.module';



@Module({
  controllers:[AppController],
  imports: [UserModule],

})
export class AppModule {}
