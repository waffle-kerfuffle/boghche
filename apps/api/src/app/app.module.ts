import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { OrganizerModule } from './organizer/organizer.module';
import { TourModule } from './tour/tour.module';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { UploadModule } from './upload/upload.module';
import { RatingModule } from './rating/rating.module';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TourModule,
    OrganizerModule,
    UserModule,
    ChatModule,
    UploadModule,
    RatingModule,
    PlaceModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
