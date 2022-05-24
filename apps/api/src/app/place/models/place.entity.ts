import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Place extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
  
  @Column()
  longitude: number
  
  @Column()
  latitude: number
  
}