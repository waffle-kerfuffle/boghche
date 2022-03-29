import { Module } from '@nestjs/common';
import { OrganizerController } from './controllers/organizer.controller';

@Module({
  imports: [],
  controllers: [OrganizerController],
  providers: [],
})
export class OrganizerModule {}
