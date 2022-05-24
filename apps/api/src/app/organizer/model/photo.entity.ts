import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/models/user.entity";
import { Organizer } from "./organizer.entity";

@Entity()
export class Photo extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  url: string

  @Column()
  caption: string

  @CreateDateColumn()
  dateCreated: Date

  @ManyToOne(() => Organizer, organizer => organizer.gallery)
  organizer: Organizer

  @ManyToOne(() => User, tourist => tourist.gallery)
  tourist: User

}