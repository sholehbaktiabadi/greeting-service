import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from '../user/user.module';
import { TaskSchedulerService } from './task-scheduler.service';

@Module({
  imports: [UserModule, ScheduleModule.forRoot()],
  providers: [TaskSchedulerService],
})
export class TaskSchedulerModule {}
