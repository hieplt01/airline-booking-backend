import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: true });

  const config = new DocumentBuilder()
    .setTitle('Airline Booking')
    .setDescription('The airline booking API description')
    .setVersion('1.0')
    .addTag('airline')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  await app.listen(3000);
}
bootstrap();
