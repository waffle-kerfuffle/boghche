import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tour } from "../../tour/models/tour.entity";
import { User } from "../../user/models/user.entity";
import { Organization } from "../../organization/model/organization.entity";

@Entity()
export class Photo extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  url: string

  @Column({ nullable: true })
  caption?: string

  @CreateDateColumn()
  dateCreated: Date

  @ManyToOne(() => Organization, organization => organization.gallery, { nullable: true })
  organization: Organization

  @ManyToOne(() => User, tourist => tourist.gallery, { nullable: true })
  tourist: User

  @ManyToOne(() => Tour, tour => tour.photos, { nullable: true })
  tour: Tour

}