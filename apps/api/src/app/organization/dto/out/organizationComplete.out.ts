import { Tour } from "../../../tour/models/tour.entity"
import { Photo } from "../../../upload/models/photo.entity"
import { User } from "../../../user/models/user.entity"
import { Organization } from "../../model/organization.entity"

export class OrganizationCompleteOutput {

  id: number
  organizationName: string
  logoUrl: string
  description: string
  gallery: Photo[]
  tours: Tour[]
  leaders: User[]

  rating: string

  static fromEntity(organization: Organization): OrganizationCompleteOutput {

    const res: OrganizationCompleteOutput = {
      ...organization,
      rating: '0'
    }

    return res;
  }

}