import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from 'typeorm';
import { ApprovalStatus } from './approvalStatus';

@Entity()
export class Tour extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  dateCreated: Date = new Date()

  @Column()
  title: string

  @Column({ nullable: true })
  description: string = undefined

  @Column({ nullable: true })
  bannerUrl: string = undefined

  @Column("simple-array", { array: false })
  galleryUrls: string[] = []

  /** مدت زمان */
  @Column()
  duration: Date

  @Column()
  price: number

  @Column()
  capacity: number

  /** امتیاز ها */
  @Column()
  ratings: number = 0

  @Column({
    type: 'enum',
    enum: [0, 1, 2],
    default: 0
  })
  approvalStatus: ApprovalStatus = 0

  // @Column()
  // comments: Comment[]
}

