import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule  } from '@nestjs/config';

import { AppController } from './app.controller';
import { OrganizerModule } from './organizer/organizer.module';
import { TourModule } from './tour/tour.module';
import { UserModule } from './user/user.module';

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
    UserModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
