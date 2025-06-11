import { ApiProperty } from '@nestjs/swagger';

export class ImageDto {
  @ApiProperty({ example: 'Shanghai' })
  name: string;

  @ApiProperty({ example: 'The Bund,' })
  title: string;

  @ApiProperty({ example: 'China’s most international city' })
  description: string;

  @ApiProperty({ example: 'https://storage.googleapis.com/airline-image/images/shanghai.jpg'} )
  imageUrl: string;
}

export class ImageResultDTO {
    @ApiProperty({ example: '1' })
    total: number;

    @ApiProperty({ example: '1' })
    page: number;

    @ApiProperty({ example: '1' })
    limit: number;

    @ApiProperty({ type: [ImageDto] })
    data: ImageDto[];
}
