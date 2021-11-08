import { Injectable } from '@nestjs/common';
import { MyTimezone } from './dto/timezone.dto';

@Injectable()
export class TimezoneService {
  async findAll() {
    return MyTimezone;
  }

  async findOne(id: number) {
    return MyTimezone.find((data) => (data.id = id));
  }
}
