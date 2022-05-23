import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Role } from './role.enum';

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

  @Column('simple-array', { default: [] })
  roles: Role[] = []

}