import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/models/user.entity";
import { Group } from "./group.entity";

@Entity()
export class Message extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  sender: User

  @Column()
  group: Group
  
  @Column()
  body: string

  @CreateDateColumn()
  dateCreated: Date
  
}