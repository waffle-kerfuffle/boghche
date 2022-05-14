import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateTourInput } from '../dto/in/createTour.in';
import { DeleteTourInput } from '../dto/in/deleteTour.in';
import { FindTourInput } from '../dto/in/findTour.in';
import { Tour } from '../dto/out/tour.out';
import { TourService } from '../services/tour.service';

@ApiTags("tour")
@Controller('tour')
export class TourController {

  constructor(private tourSv: TourService) {

  }

  @Get('list')
  getAllTours() {
    return this.tourSv.getAllTours();
  }

  @Post('find')
  findTour(@Body() findTourArgs: FindTourInput) {
    return this.tourSv.findTours(findTourArgs);
  }

  @Post('search')
  searchTours(@Body() findTOurArgs: FindTourInput) {
    return this.tourSv.findTours(findTOurArgs);
  }

  @Post('create')
  createTour(@Body() createTourData: CreateTourInput) {
    return this.tourSv.createTour(createTourData);
  }

  @Delete('delete')
  deleteTour(@Body() deleteTourArgs: DeleteTourInput) {
    return this.tourSv.deleteTour(deleteTourArgs);
  }

}
