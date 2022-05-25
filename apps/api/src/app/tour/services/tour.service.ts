import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { OrganizationService } from '../../organization/services/organization.service';
import { CreateTourInput } from '../dto/in/createTour.in';
import { DeleteTourInput } from '../dto/in/deleteTour.in';
import { FindTourInput } from '../dto/in/findTour.in';
import { UpdateTourInput } from '../dto/in/updateTour.in';
import { Tour } from '../models/tour.entity';

@Injectable()
export class TourService {

  constructor(
    @InjectRepository(Tour)
    private tourRepo: Repository<Tour>,
    private organizationSv: OrganizationService
  ) { }

  // #region CRUD

  async createTour(createTourData: CreateTourInput): Promise<Tour> {

    let newTour = this.tourRepo.create(createTourData);
    newTour.organization = await this.organizationSv.findOrganization({ id: createTourData.organizationId })

    newTour = await newTour.save()
    return newTour;
  }

  async updateTour({ id, ...overrides }: UpdateTourInput): Promise<UpdateResult> {

    const res = await this.tourRepo.update({ id }, overrides);
    return res;
  }

  async getAllTours(): Promise<Tour[]> {
    
    const tour = await this.tourRepo.find();
    return tour;
  }

  async findTour(findTourArgs: FindTourInput): Promise<Tour> {

    const tour = await this.tourRepo.findOne(findTourArgs);
    return tour;
  }

  async searchTours(findTourArgs: FindTourInput): Promise<Tour[]> {

    const tours = await this.tourRepo.find(findTourArgs);
    return tours;
  }

  async deleteTour({ id }: DeleteTourInput): Promise<DeleteResult> {

    const res = await this.tourRepo.delete({ id });
    return res;
  }

  // #endregion CRUD


}
