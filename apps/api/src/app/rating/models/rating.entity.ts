import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tour } from "../../tour/models/tour.entity";
import { User } from "../../user/models/user.entity";

@Entity()
export class Rating {

  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'enum',
    enum: [1, 2, 3, 4, 5]
  })
  score: 1 | 2 | 3 | 4 | 5

  @ManyToOne(() => User, user => user.authoredRatings)
  author: User;

  @ManyToOne(() => Tour, tour => tour.ratings)
  tour: Tour;

}