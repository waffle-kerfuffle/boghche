import { Tour } from "../../../tour/models/tour.entity"
import { Organization } from "../../model/organization.entity"

export class OrganizationCompleteOutput {

  id: number
  name: string
  logoUrl: string
  bio: string
  gallery: string[]
  tours: Tour[]
  rating: number
  awards: number

  static fromEntity(organization: Organization): OrganizationCompleteOutput {


    return new OrganizationCompleteOutput();
  }

}