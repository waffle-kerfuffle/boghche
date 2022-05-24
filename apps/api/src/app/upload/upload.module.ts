import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Photo } from "./models/photo.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
})
export class UploadModule { }
