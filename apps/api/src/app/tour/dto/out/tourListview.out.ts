import { Photo } from "../../../upload/models/photo.entity"
import { Tour } from "../../models/tour.entity"

export class TourListOutput {
  id: number
  price: number
  capacity: number
  dateCreated: Date

  photos: Photo[] = []

  atendeeCount: number
  likeCount: number

  static fromEntity(tour: Tour): TourListOutput {

    const likeCount = tour.likes.length;
    const atendeeCount = tour.atendees.length;

    delete tour.atendees;
    delete tour.photos;
    delete tour.comments;
    delete tour.likes;
    delete tour.ratings;
    
    delete tour.approvalStatus;
    
    const res: TourListOutput = {
      ...tour,

      likeCount,
      atendeeCount,
    }

    return res;
  }

}