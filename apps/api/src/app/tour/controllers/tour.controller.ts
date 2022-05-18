import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { CreateTourInput } from '../dto/in/createTour.in';
import { DeleteTourInput } from '../dto/in/deleteTour.in';
import { FindTourInput } from '../dto/in/findTour.in';
import { TourComplete } from '../dto/out/tourComplete.out';
import { Tour } from '../models/tour.entity';
import { TourService } from '../services/tour.service';

@ApiTags("tour")
@Controller('tour')
export class TourController {

  constructor(
    private tourSv: TourService
  ) { }

  // #region CRUD

  @Get('list')
  async getAllTours(): Promise<TourComplete[]> {
    const tours: Tour[] = await this.tourSv.getAllTours();

    const res: TourComplete[] = tours;
    return res;
  }

  @Post('find')
  async findTour(@Body() findTourArgs: FindTourInput): Promise<TourComplete> {
    const tour = await this.tourSv.findTour(findTourArgs);

    const res: TourComplete = tour;
    return res;
  }

  @Post('search')
  async searchTours(@Body() findTOurArgs: FindTourInput): Promise<TourComplete[]> {
    const tours = await this.tourSv.searchTours(findTOurArgs);

    const res: TourComplete[] = tours;
    return res;
  }

  @Post('create')
  async createTour(@Body() createTourData: CreateTourInput): Promise<TourComplete> {
    const tour = await this.tourSv.createTour(createTourData);

    const res: TourComplete = tour;
    return res;
  }

  @Delete('delete')
  async deleteTour(@Body() deleteTourArgs: DeleteTourInput): Promise<DeleteResult> {
    const res = await this.tourSv.deleteTour(deleteTourArgs);
    return res;
  }

  // #endregion CRUD

}
