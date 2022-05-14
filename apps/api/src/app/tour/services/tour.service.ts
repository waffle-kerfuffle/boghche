import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTourInput } from '../dto/in/createTour.in';
import { DeleteTourInput } from '../dto/in/deleteTour.in';
import { GetTourInput } from '../dto/in/getTour.in';
import { UpdateTourInput } from '../dto/in/updateTour.in';
import { Tour } from '../model/tour.entity';

@Injectable()
export class TourService {

  constructor(
    @InjectRepository(Tour)
    private tourRepo: Repository<Tour>
  ) { }

  async createTour(createTourData: CreateTourInput): Promise<Tour> {

    const tour = await this.tourRepo.save(createTourData);
    return tour;

    // const tour: Tour = { tourId: uuidv4(), ...createTourData };
    // this.tours.push(tour);
    // return tour;
  }

  async updateTour(updateTourData: UpdateTourInput): Promise<Tour> {

    throw new NotImplementedException('update is not yet impelmented');
    
    let tour = await this.tourRepo.findOne(updateTourData.id);
    if(!tour) throw new NotFoundException(tour,'a tour with the specified [id] was not found');

    return tour;

    // const tour = this.tours.find(tour => tour.tourId === updateTourData.tourId);
    // Object.assign(tour, updateTourData);
    // return tour;
  }

  async getAllTours(): Promise<Tour[]> {
    return await this.tourRepo.find();
  }

  async getTour(getTourArgs: GetTourInput): Promise<Tour> {

    const tour = await this.tourRepo.findOne(getTourArgs);
    return tour;

    // const tour = this.tours.find(tour => tour.tourId === getTourArgs.tourId);
    // return tour;
  }

  async getTours(getToursArgs: GetTourInput): Promise<Tour[]> {

    return await this.tourRepo.find(getToursArgs);

    // const tours = getToursArgs.tourIds.map(tourId => this.getTour({ tourId }));
    // return tours;
  }

  async deleteTour(deleteTourData: DeleteTourInput): Promise<Tour> {

    const tour = await this.tourRepo.findOne(deleteTourData);

    await this.tourRepo.delete(tour);

    return tour;

    // const tourIndex = this.tours.findIndex(tour => tour.tourId === deleteTourData.tourId);

    // const deletedTour = this.tours[tourIndex];

    // this.tours.splice(tourIndex);

    // return deletedTour;
  }

}
