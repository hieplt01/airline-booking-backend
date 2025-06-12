import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { ListAirportDTO } from './dto/departure.dto';
import { getArrivalDTO, getDepartureDTO } from './dto/body.dto';


@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post('departureAirport')
  @ApiOkResponse({
    description: "List departure airport",
    type: ListAirportDTO
  })
  listDepartureAirport(@Body() body: getDepartureDTO) {
    return this.flightsService.listDeparture(body);
  }

  @Post('arrivalAirport')
  @ApiOkResponse({
    description: "List arrival airport",
    type: ListAirportDTO
  })
  listArrivalAirport(@Body() body: getArrivalDTO) {
    return this.flightsService.listArrival(body);
  }

  @Get('search')
  @ApiQuery({ name: 'from', required: false, type: String, example: 'SFO' })
  @ApiQuery({ name: 'to', required: false, type: String, example: 'NRT' })
  @ApiQuery({ name: 'adults', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'minors', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'tripType', required: false, type: String, example: 'one-way' })
  @ApiQuery({ name: 'departDate', required: false, type: Date, example: '2025-06-12' })
  @ApiQuery({ name: 'returnDate', required: false, type: Date, example: '2025-07-23' })
  getListFlights(
    @Query('from') from = 'SFO',
    @Query('to') to = 'NRT',
    @Query('tripType') type = 'one-way'
  ) {
    return this.flightsService.listFlights(from, to, type);
  }

}
