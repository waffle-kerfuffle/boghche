import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';

import { AppModule } from './app/app.module';

async function bootstrap() {

  // standard
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  // global prefix
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  
  // static assets folder
  app.useStaticAssets(join(__dirname, 'assets'));
  
  // swagger
  const config = new DocumentBuilder()
    .setTitle('Boghche API')
    .setDescription('Documentation for all endpoints')
    .setVersion('0.0.1')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup(globalPrefix, app, document, { customCssUrl: '/styles/swagger-dark.css' });
  
  // run server
  const port = process.env.PORT || 3333;
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
