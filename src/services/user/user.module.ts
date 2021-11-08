import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './model/user.entity';
import { MessagerModule } from '../messager/messager.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MessagerModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
