import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tour } from "../../tour/models/tour.entity";
import { Photo } from "../../upload/models/photo.entity";
import { User } from "../../user/models/user.entity";

@Entity()
export class Organization extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  organizationName: string

  @OneToMany(() => User, (user) => user.organization)
  leaders: User

  @OneToMany(() => Tour, (tour) => tour.organization)
  tours: Tour[]

  @OneToMany(() => Photo, (photo) => photo.organization)
  gallery: Photo[]

}