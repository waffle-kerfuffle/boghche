import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Place } from "./models/place.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
})
export class PlaceModule { }
