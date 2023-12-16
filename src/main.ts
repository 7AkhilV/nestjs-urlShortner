import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '..', 'views' ));
  app.useStaticAssets(path.join(__dirname, '..', 'views'));
  
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
