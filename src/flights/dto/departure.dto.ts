import { ApiProperty } from '@nestjs/swagger';

export class AirportDTO {
    @ApiProperty({ example: 'Tokyo (All)' })
    name: string;
    
    @ApiProperty({ example: 'TYO' })
    code: string;
}

export class ListAirportDTO {
    @ApiProperty({ example: 'JAPAN' })
    country: string;

    @ApiProperty({ example: 'JPN' })
    countryCode: string;

    @ApiProperty({ type: [AirportDTO]} )
    list: AirportDTO[];
}