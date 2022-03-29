import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { OrganizerModule } from './organizer/organizer.module';
import { TourModule } from './tour/tour.module';

@Module({
  imports: [TourModule, OrganizerModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
