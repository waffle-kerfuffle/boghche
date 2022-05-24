import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tour } from "../../tour/models/tour.entity";
import { User } from "../../user/models/user.entity";

@Entity()
export class Heart extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  body: string
  
  @CreateDateColumn()
  dateCreated: Date

  @ManyToOne(() => User)
  author: User

  @ManyToOne(() => Tour, tour => tour.likes)
  tour: Tour

}