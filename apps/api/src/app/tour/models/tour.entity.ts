import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, ManyToOne, OneToMany, ManyToMany, OneToOne, JoinTable, AfterLoad } from 'typeorm';
import { Organization } from '../../organization/model/organization.entity';
import { Place } from '../../place/models/place.entity';
import { Heart } from '../../rating/models/heart.entity';
import { Opinion } from '../../rating/models/opinion.entity';
import { Rating } from '../../rating/models/rating.entity';
import { Photo } from '../../upload/models/photo.entity';
import { User } from '../../user/models/user.entity';
import { ApprovalStatus } from './approvalStatus';
import { DestinationType } from './DestinationType';

@Entity()
export class Tour extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  dateCreated: Date = new Date()

  @Column()
  title: string

  @Column({ nullable: true })
  caption?: string

  @Column({ nullable: true })
  description?: string

  /** مبدا */
  @JoinTable()
  @OneToOne(() => Place)
  dispatch: Place

  /** مقصد */
  @JoinTable()
  @OneToOne(() => Place)
  destination: Place

  @Column({
    type: 'enum',
    enum: Object.values(DestinationType)
  })
  destinationType: DestinationType

  @Column({ nullable: true })
  bannerUrl?: string

  /** مدت زمان */
  @Column()
  duration: Date

  /** قیمت */
  @Column()
  price: number

  /** ظرفیت */
  @Column()
  capacity: number

  @Column({
    type: 'enum',
    enum: Object.values(ApprovalStatus),
    default: 0
  })
  approvalStatus: ApprovalStatus = ApprovalStatus.pending;

  /** شرکت */
  @ManyToOne(() => Organization, organization => organization.tours)
  organization: Organization

  /** امتیاز ها */
  @OneToMany(() => Rating, rating => rating.tour, { nullable: true })
  ratings: Rating[]

  @OneToMany(() => Heart, heart => heart.tour, { nullable: true })
  likes: Heart[]

  @OneToMany(() => Opinion, opinion => opinion.author, { nullable: true })
  comments: Opinion[]

  /** گالری */
  @OneToMany(() => Photo, photo => photo.tour, { nullable: true })
  photos: Photo[]

  /** اعضا */
  @ManyToMany(() => User, { nullable: true })
  atendees: User[]

  @AfterLoad()
  nullchecks() {
    this.atendees ??= [];
    this.photos ??= [];
    this.comments ??= [];
    this.likes ??= [];
    this.ratings ??= [];
  }
  
}

