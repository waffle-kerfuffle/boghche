import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Photo } from '../../organizer/model/photo.entity';
import { Role } from './role.enum';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ nullable: true })
  bio?: string

  @Column()
  pass: string

  @Column({ nullable: true })
  avatarUrl: string

  @Column()
  telno: string

  @Column('simple-array', { default: [] })
  roles: Role[] = []

  @OneToMany(() => Photo, (photo) => photo.organizer)
  gallery: Photo[]
  
  
}