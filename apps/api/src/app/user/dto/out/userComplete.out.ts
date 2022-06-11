import { Organization } from "../../../organization/model/organization.entity"
import { Heart } from "../../../rating/models/heart.entity"
import { Opinion } from "../../../rating/models/opinion.entity"
import { Rating } from "../../../rating/models/rating.entity"
import { Photo } from "../../../upload/models/photo.entity"
import { Role } from "../../models/role.enum"
import { User } from "../../models/user.entity"

export class UserComplete {

  id: number

  name: string

  bio?: string

  pass: string

  avatarUrl: string

  telno: string

  roles: Role[] = []

  gallery: Photo[]

  authoredComments: Opinion[]

  authoredLikes: Heart[]

  authoredRatings: Rating[]

  organization?: Organization


  public static fromEntity(user: User): UserComplete {

    const res: UserComplete = {
      ...user
    }

    return res;
  }

}