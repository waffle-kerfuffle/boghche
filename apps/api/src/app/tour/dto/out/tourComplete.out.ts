import { Organization } from "../../../organization/model/organization.entity"
import { Place } from "../../../place/models/place.entity"
import { Opinion } from "../../../rating/models/opinion.entity"
import { Photo } from "../../../upload/models/photo.entity"
import { User } from "../../../user/models/user.entity"
import { ApprovalStatus } from "../../models/approvalStatus"
import { DestinationType } from "../../models/DestinationType"
import { Tour } from "../../models/tour.entity"

export class TourCompleteOutput {
  id: number
  dateCreated: Date
  title: string
  caption?: string
  description?: string
  dispatch: Place
  destination: Place
  destinationType: DestinationType
  bannerUrl?: string
  /** مدت زمان */
  duration: Date
  price: number
  capacity: number
  approvalStatus: ApprovalStatus
  organization: Organization

  comments: Opinion[] = []
  photos: Photo[] = []
  atendees: User[] = []

  /** امتیاز ها */
  ratings: string
  likeCount: number

  static fromEntity(tour: Tour): TourCompleteOutput {

    const sumRating: number = tour.ratings.reduceRight<number>((acc, current) => acc + current.score, 0);
    const averageRating: string = (sumRating / (tour.ratings.length || 1)).toFixed(1);

    const likeCount: number = tour.likes.length;
    delete tour.likes;

    const res: TourCompleteOutput = { 
      ...tour,
      likeCount,
      ratings: averageRating,
    }

    return res;
  }

}