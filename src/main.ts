import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Env } from './config/env-load.config';
const { SERVER_PORT } = Env();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVER_PORT || 8000);
  Logger.log(`Apps run on server port: ${SERVER_PORT}`, 'SERVER');
}
bootstrap();
