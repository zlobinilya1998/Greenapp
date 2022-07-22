import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Greenapp Api')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('Zlobin Iliya')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}

bootstrap();
