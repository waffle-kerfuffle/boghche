import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  pass: string
  
  @Column({ nullable: true })
  avatarUrl: string

  @Column()
  telno: string

}