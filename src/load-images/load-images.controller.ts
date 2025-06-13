import { Body, Controller, Get, Query } from '@nestjs/common';
import { LoadImagesService } from './load-images.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { ImageResultDTO } from './load-images.dto';

@Controller('load-images')
export class LoadImagesController {
    constructor(private readonly loadImageService: LoadImagesService) {}

    @Get()
    @ApiOkResponse({
        description: "Get list images",
        type: ImageResultDTO
    })
    @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
    @ApiQuery({ name: 'limit', required: false, type: Number, example: 7 })
    imagesForLazyLoad(@Query('page') page = 1, @Query('limit') limit = 7) {
        return this.loadImageService.getImages(page,limit);
    }
}
