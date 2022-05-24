import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Photo } from '../../upload/models/photo.entity';
import { Opinion } from '../../rating/models/opinion.entity';
import { Role } from './role.enum';
import { Rating } from '../../rating/models/rating.entity';
import { Heart } from '../../rating/models/heart.entity';

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

  @OneToMany(() => Opinion, opinion => opinion.author)
  authoredComments: Opinion[]

  @OneToMany(() => Heart, heart => heart.author)
  authoredLikes: Heart[] 

  @OneToMany(() => Rating, rating => rating.author)
  authoredRatings: Rating[]
}