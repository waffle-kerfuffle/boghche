import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { OrganizationService } from '../../organization/services/organization.service';
import { CreateTourInput } from '../dto/in/createTour.in';
import { DeleteTourInput } from '../dto/in/deleteTour.in';
import { FindTourInput } from '../dto/in/findTour.in';
import { TourCompleteOutput } from '../dto/out/tourComplete.out';
import { TourListOutput } from '../dto/out/tourListview.out';
import { Tour } from '../models/tour.entity';
import { TourService } from '../services/tour.service';

@ApiTags("tour")
@Controller('tour')
export class TourController {

  constructor(
    private tourSv: TourService,
    private organizationSv: OrganizationService
  ) { }

  // #region CRUD

  @Get('list')
  async getAllTours(): Promise<TourListOutput[]> {
    const tours: Tour[] = await this.tourSv.getAllTours();

    const res: TourListOutput[] = tours.map(tour => TourListOutput.fromEntity(tour));
    return res;
  }

  @Post('find')
  async findTour(@Body() findTourArgs: FindTourInput): Promise<TourCompleteOutput> {
    const tour = await this.tourSv.findTour(findTourArgs);

    const res: TourCompleteOutput = TourCompleteOutput.fromEntity(tour);
    return res;
  }

  @Post('search')
  async searchTours(@Body() findTOurArgs: FindTourInput): Promise<TourCompleteOutput[]> {
    const tours = await this.tourSv.searchTours(findTOurArgs);

    const res: TourCompleteOutput[] = tours.map(tour => TourCompleteOutput.fromEntity(tour));
    return res;
  }

  @Post('create')
  async createTour(@Body() createTourData: CreateTourInput): Promise<TourCompleteOutput> {
    const tour = await this.tourSv.createTour(createTourData, createTourData.organizationId);

    const res: TourCompleteOutput = TourCompleteOutput.fromEntity(tour);
    return res;
  }

  @Delete('delete')
  async deleteTour(@Body() deleteTourArgs: DeleteTourInput): Promise<DeleteResult> {
    const res = await this.tourSv.deleteTour(deleteTourArgs);
    return res;
  }

  // #endregion CRUD

}
