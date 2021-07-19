import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);
  Logger.log(`Successfully started the app at port ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
