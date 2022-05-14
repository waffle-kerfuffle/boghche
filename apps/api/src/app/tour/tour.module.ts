import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourController } from './controllers/tour.controller';
import { Tour } from './model/tour.entity';
import { TourService } from './services/tour.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tour])],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule {}
