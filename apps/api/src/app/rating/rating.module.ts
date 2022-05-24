import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Heart } from "./models/heart.entity";
import { Opinion } from "./models/opinion.entity";
import { Rating } from "./models/rating.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Heart, Rating, Opinion])],
})
export class RatingModule {}
