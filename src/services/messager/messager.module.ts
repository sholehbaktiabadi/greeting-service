import { Module } from '@nestjs/common';
import { MessagerController } from './messager.controller';
import { MessagerService } from './messager.service';

@Module({
  controllers: [MessagerController],
  providers: [MessagerService],
  exports: [MessagerService],
})
export class MessagerModule {}
