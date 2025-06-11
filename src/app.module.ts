import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoadImagesModule } from './load-images/load-images.module';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [LoadImagesModule, FlightsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
