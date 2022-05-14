import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Tour extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  dateCreated: Date
  
  @Column()
  title: string
  
  @Column()
  description: string
  
  @Column()
  bannerUrl: string
  
  @Column("simple-array", { array: true })
  galleryUrls: string[]
  
  /** مدت زمان */
  @Column()
  duration: Date
  
  @Column()
  price: number
  
  @Column()
  capacity: number
  
  /** امتیاز ها */
  @Column()
  ratings: number
  
  // @Column()
  // comments: Comment[]
}