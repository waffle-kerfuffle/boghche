import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourController } from './controllers/tour.controller';
import { Tour } from './model/tour.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tour])],
  controllers: [TourController],
  providers: [],
})
export class TourModule {}
