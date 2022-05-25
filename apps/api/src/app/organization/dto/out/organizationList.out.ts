import { Organization } from "../../model/organization.entity";

export class OrganizationListOutput {


  static fromEntity(organization: Organization): OrganizationListOutput {

    return new OrganizationListOutput();
  }

}