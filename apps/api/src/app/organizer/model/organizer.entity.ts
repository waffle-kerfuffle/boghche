import { Column, Entity, OneToMany } from "typeorm";
import { Tour } from "../../tour/models/tour.entity";
import { User } from "../../user/models/user.entity";
import { Photo } from "../../upload/models/photo.entity";

@Entity()
export class Organizer extends User {

  @Column()
  username: string

  @OneToMany(() => Tour, (tour) => tour.organizer)
  tours: Tour[]

}