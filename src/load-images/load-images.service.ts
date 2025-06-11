import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { ImageResultDTO } from './load-images.dto';


@Injectable()
export class LoadImagesService {
    getImages(): ImageResultDTO {
        const filePath = 'src/load-images/image-items.json';
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const total = jsonData.length;
        const data = jsonData;
        return { total, data }
    }
}
