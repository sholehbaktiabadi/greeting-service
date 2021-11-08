import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from '../user/user.service';

@Injectable()
export class TaskSchedulerService {
  constructor(private userService: UserService) {}
  private readonly logger = new Logger();

  @Cron(CronExpression.EVERY_10_MINUTES)
  handleCron() {
    this.userService.bulkMessage();
    this.logger.debug('Called every 10 minutes');
  }
}
