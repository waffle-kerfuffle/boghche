import { Module } from '@nestjs/common';
import { TourController } from './controllers/tour.controller';

@Module({
  imports: [],
  controllers: [TourController],
  providers: [],
})
export class TourModule {}
