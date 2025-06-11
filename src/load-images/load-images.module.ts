import { Module } from '@nestjs/common';
import { LoadImagesController } from './load-images.controller';
import { LoadImagesService } from './load-images.service';

@Module({
  controllers: [LoadImagesController],
  providers: [LoadImagesService]
})
export class LoadImagesModule {}
