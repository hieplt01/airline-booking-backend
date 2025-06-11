import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { ImageResultDTO } from './load-images.dto';


@Injectable()
export class LoadImagesService {
    getImages(page: number, limit: number): ImageResultDTO {
        const filePath = 'src/load-images/image-items.json';
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const startIndex  = Number((page - 1) * limit);
        const result = jsonData.slice(startIndex, startIndex + Number(limit));
        const total = jsonData.length;
        const data = result;
        return { total, page, limit, data }
    }
}
