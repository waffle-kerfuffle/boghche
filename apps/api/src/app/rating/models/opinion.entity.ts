import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/models/user.entity";

@Entity()
export class Opinion {

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User)
  author: User
  
}