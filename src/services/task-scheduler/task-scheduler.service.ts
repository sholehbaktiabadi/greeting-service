import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from '../user/user.service';

@Injectable()
export class TaskSchedulerService {
  constructor(private userService: UserService) {}
  private readonly logger = new Logger();

  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    this.userService.bulkMessage();
    this.logger.debug('Task Schedule Bulk Message is Running..............');
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  handleBackupdMessageCron() {
    this.userService.bulkMessageBackup();
    this.logger.debug(
      'Task Schedule Backup Bulk Message is Running..............',
    );
  }
}
