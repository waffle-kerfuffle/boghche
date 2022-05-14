/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {

  // standard
  const app = await NestFactory.create(AppModule);


  // global prefix
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  
  // swagger
  const config = new DocumentBuilder()
    .setTitle('Boghche API')
    .setDescription('Documentation for all endpoints')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(globalPrefix, app, document);
  
  // run server
  const port = process.env.PORT || 3333;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
