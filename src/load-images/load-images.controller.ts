import { Controller, Get } from '@nestjs/common';
import { LoadImagesService } from './load-images.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { ImageResultDTO } from './load-images.dto';

@Controller('load-images')
export class LoadImagesController {
    constructor(private readonly loadImageService: LoadImagesService) {}

    @Get()
    @ApiOkResponse({
        description: "Get list images",
        type: ImageResultDTO
    })
    imagesForLazyLoad() {
        return this.loadImageService.getImages();
    }
}
