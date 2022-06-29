import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const whitelist = ['localhost:3000', '127.0.0.1', 'https://sut-sp-frontend.herokuapp.com/'];
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || whitelist.indexOf(origin) === -1) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    },
  });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Library API - Software Engineering Project')
    .setDescription(
      'The Library API is the backend application for our Software Engineering Project class at The Silesian University of Technology',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
