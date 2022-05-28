import { AfterLoad, BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rating } from "../../rating/models/rating.entity";
import { Tour } from "../../tour/models/tour.entity";
import { Photo } from "../../upload/models/photo.entity";
import { User } from "../../user/models/user.entity";

@Entity()
export class Organization extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  organizationName: string

  @Column({ nullable: true })
  logoUrl: string

  @Column({ nullable: true })
  description: string

  @OneToMany(() => User, (user) => user.organization, { nullable: false })
  leaders: User[]

  @OneToMany(() => Tour, (tour) => tour.organization, { nullable: true })
  tours: Tour[]

  @OneToMany(() => Photo, (photo) => photo.organization, { nullable: true })
  gallery: Photo[]

  @AfterLoad()
  nullchecks() {
    this.gallery ??= [];
    this.tours ??= [];
    this.leaders ??= []
  }

}