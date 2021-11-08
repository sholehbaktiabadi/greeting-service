import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Env } from 'src/config/env-load.config';
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = Env();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      // migrationsTableName: '_schema_migration_history',
      // migrationsRun: true,
      // migrations: [join(__dirname, '/migrations/*.js')],
    }),
  ],
})
export class DatabaseModule {}
