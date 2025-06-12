import { Injectable } from '@nestjs/common';
import { ListAirportDTO } from './dto/departure.dto';
import * as fs from 'fs';
import { FlightDto } from './dto/search.dto';

@Injectable()
export class FlightsService {
  listDeparture(body): ListAirportDTO {
    const filePath = 'src/flights/airport.json';
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const contryCode = body.countryCode;
    let result;
    for (var i of jsonData) {
      if (i.countryCode == contryCode) {
        result = i;
      }
    }
    const data: ListAirportDTO = {
      country: result.country,
      countryCode: result.countryCode,
      list: result.departureAirport
    }
    return data;
  }

  listArrival(body): ListAirportDTO {
    const filePath = 'src/flights/airport.json';
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const contryCode = body.countryCode;
    const departureCode = body.departureCode;
    let result;
    for (var i of jsonData) {
      if (i.countryCode == contryCode) {
        result = i;
      }
    }
    const filtered = result.arrivalAirport.filter(airport => airport.code !== departureCode);
    const data: ListAirportDTO = {
      country: result.country,
      countryCode: result.countryCode,
      list: filtered
    }
    return data;
  }

  listFlights(from: string, to: string, tripType: string) {
    const filePath = 'src/flights/mockFlights.json';
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let data;
    for (var i of jsonData) {
      if (i.type == tripType) {
        data = i.data;
      }
    }
    let result = [];
    data.forEach(el => {
      if (el.departureAirport == from && el.arrivalAirport == to) {
        result.push(el);
      }
    })
    return result;
  }
}
