import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/models/user.entity";
import { Message } from "./message.entity";

@Entity()
export class Group extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  users: User[]

  @Column()
  messages: Message[]

  @CreateDateColumn()
  dateCreated: Date

}