import { Photo } from "../../../upload/models/photo.entity"
import { Tour } from "../../models/tour.entity"

export class TourListOutput {
  id: number
  price: number
  likeCount: number
  capacity: number
  dateCreated: Date
  atendeeCount: number
  photos: Photo[] = []

  static fromEntity(tour: Tour): TourListOutput {

    const res: TourListOutput = {
      ...tour,
      likeCount: tour.likes.length,
      atendeeCount: tour.atendees.length,
    }

    return res;
  }
  
}