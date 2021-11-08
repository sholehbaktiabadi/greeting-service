import { Controller, Get, Param } from '@nestjs/common';
import { TimezoneService } from './timezone.service';

@Controller('timezone')
export class TimezoneController {
  constructor(private timezoneService: TimezoneService) {}

  @Get()
  async getAll() {
    return await this.timezoneService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this.timezoneService.findOne(id);
  }
}
