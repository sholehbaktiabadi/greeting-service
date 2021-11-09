import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { MessagerModule } from './services/messager/messager.module';
import { TaskSchedulerModule } from './services/task-scheduler/task-scheduler.module';
import { TimezoneModule } from './services/timezone/timezone.module';
import { UserModule } from './services/user/user.module';

@Module({
  imports: [
    UserModule,
    MessagerModule,
    DatabaseModule,
    TimezoneModule,
    TaskSchedulerModule,
  ],
})
export class AppModule {}
