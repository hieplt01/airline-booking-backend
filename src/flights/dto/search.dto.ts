import { ApiProperty } from '@nestjs/swagger';

export enum FlightType {
  ROUND_TRIP = 'round-trip',
  ONE_WAY = 'one-way',
}

export class FlightDto {
 @ApiProperty({ example: '1' })
  id: string;

 @ApiProperty({ example: 'Japan Airlines' })
  airline: string;

 @ApiProperty({ example: 'JL' })
  airlineCode: string;

 @ApiProperty({ example: '🔴' })
  logo: string;

 @ApiProperty({ example: '18h 22m' })
  duration: string;

 @ApiProperty({ example: '7:35 AM' })
  departureTime: string;

 @ApiProperty({ example: '12:15 PM' })
  arrivalTime: string;

 @ApiProperty({ example: 'SFO' })
  departureAirport: string;

 @ApiProperty({ example: 'NRT' })
  arrivalAirport: string;

 @ApiProperty({ example: '1' })
  stops: number;

 @ApiProperty({ example: '50m' })
  stopDuration?: string;

 @ApiProperty({ example: 'HKG' })
  stopLocation?: string;

 @ApiProperty({ example: 663 })  
 price: number;

 @ApiProperty({ example: 'one-way' })  
 type: FlightType;
}