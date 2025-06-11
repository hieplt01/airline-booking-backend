import { ApiProperty } from '@nestjs/swagger';

export class getDepartureDTO {
    @ApiProperty({ example: 'JPN' })
    countryCode: string;
}

export class getArrivalDTO {
    @ApiProperty({ example: 'JPN' })
    countryCode: string;

    @ApiProperty({ example: 'TYO' })
    departureCode: string;
}