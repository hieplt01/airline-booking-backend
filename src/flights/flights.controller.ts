import { Controller, Get, Post, Body } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { ApiOkResponse } from '@nestjs/swagger';
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

}
