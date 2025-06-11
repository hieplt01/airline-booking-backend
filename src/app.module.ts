import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoadImagesModule } from './load-images/load-images.module';

@Module({
  imports: [LoadImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
