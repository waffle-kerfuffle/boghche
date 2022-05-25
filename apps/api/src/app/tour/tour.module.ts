import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationModule } from '../organization/organization.module';
import { TourController } from './controllers/tour.controller';
import { Tour } from './models/tour.entity';
import { TourService } from './services/tour.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tour]), OrganizationModule],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule { }
