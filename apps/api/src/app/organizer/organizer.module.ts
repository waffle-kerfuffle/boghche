import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizerController } from './controllers/organizer.controller';
import { Organizer } from './model/organizer.entity';
import { OrganizerService } from './services/organizer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Organizer])],
  controllers: [OrganizerController],
  providers: [OrganizerService],
  exports: [OrganizerService]
})
export class OrganizerModule { }
