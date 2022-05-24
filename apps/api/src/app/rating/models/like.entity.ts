import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tour } from "../../tour/models/tour.entity";
import { User } from "../../user/models/user.entity";

Entity()
export class Like {

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User, user => user.authoredLikes)
  author: User

  @CreateDateColumn()
  dateCreated: Date

  @Column()
  body: string

  @ManyToOne(() => Tour, tour => tour.likes, { nullable: true })
  tour: Tour

}