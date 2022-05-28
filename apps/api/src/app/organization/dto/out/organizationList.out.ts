import { Organization } from "../../model/organization.entity";

export class OrganizationListOutput {

  id: number
  organizationName: string
  logoUrl: string
  description: string

  tourCount: number
  rating: string

  static fromEntity({ id, organizationName, logoUrl, description, ...relations}: Organization): OrganizationListOutput {

    const res: OrganizationListOutput = {
      id,
      organizationName,
      logoUrl,
      description,
      tourCount: relations.tours?.length,
      rating: '0'
    }
    
    return res;
  }

}