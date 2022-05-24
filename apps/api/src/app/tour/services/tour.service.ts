import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { OrganizerService } from '../../organizer/services/organizer.service';
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
    private organizerSv: OrganizerService
  ) { }

  // #region CRUD

  async createTour(createTourData: CreateTourInput): Promise<Tour> {

    let newTour = this.tourRepo.create(createTourData);
    newTour.organizer = await this.organizerSv.findOrganizer({ id: createTourData.organizerId })

    newTour = await newTour.save()

    return newTour;
  }

  async updateTour(updateTourData: UpdateTourInput): Promise<Tour> {

    throw new NotImplementedException('update is not yet impelmented');

    let tour = await this.tourRepo.findOne(updateTourData.id);
    if (!tour) throw new NotFoundException(tour, 'a tour with the specified [id] was not found');

    return tour;
  }

  async getAllTours(): Promise<Tour[]> {
    return await this.tourRepo.find();
  }

  async findTour(findTourArgs: FindTourInput): Promise<Tour> {

    const tour = await this.tourRepo.findOne(findTourArgs);
    return tour;
  }

  async searchTours(findTourArgs: FindTourInput): Promise<Tour[]> {

    return await this.tourRepo.find(findTourArgs);
  }

  async deleteTour(deleteTourData: DeleteTourInput): Promise<DeleteResult> {

    const tour = await this.tourRepo.findOne(deleteTourData);

    const res = await this.tourRepo.delete(tour);

    return res;
  }

  // #endregion CRUD


}
