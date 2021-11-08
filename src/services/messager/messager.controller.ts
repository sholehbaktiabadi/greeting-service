import { Controller, Post } from '@nestjs/common';
import { MessagerService } from './messager.service';

@Controller('messager')
export class MessagerController {
  constructor(private messageService: MessagerService) {}

  @Post()
  async sentMessage() {
    return await this.messageService.sent('test');
  }
}
