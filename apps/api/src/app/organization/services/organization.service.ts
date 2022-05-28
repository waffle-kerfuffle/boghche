import { Injectable, NotFoundException, NotImplementedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { UserService } from "../../user/services/user.service";
import { CreateOrganizationInput } from "../dto/in/createOrganization.in";
import { DeleteOrganizationInput } from "../dto/in/deleteOrganization.in";
import { FindOrganizationInput } from "../dto/in/findOrganization.in";
import { UpdateOrganizationInput } from "../dto/in/updateOrganization.in";
import { Organization } from "../model/organization.entity";

@Injectable()
export class OrganizationService {

  constructor(
    @InjectRepository(Organization)
    private organizationRepo: Repository<Organization>,
    private userSv: UserService
  ) { }

  // #region CRUD

  async createOrganization(createOrganizationData: CreateOrganizationInput, leaderId: number): Promise<Organization> {

    let leader = await this.userSv.findUser({ id: leaderId });
    if (!leader) throw `No user with the specified [id: ${leaderId}] was found`;

    let newOrganization = this.organizationRepo.create(createOrganizationData);
    newOrganization.leaders = [leader];
    
    newOrganization = await newOrganization.save();
    return newOrganization;
  }

  async updateOrganization({ id, ...overrides }: UpdateOrganizationInput): Promise<UpdateResult> {

    const res = await this.organizationRepo.update({ id }, overrides);
    return res;
  }

  async getAllOrganizations(): Promise<Organization[]> {
    return await this.organizationRepo.find();
  }

  async findOrganization(findOrganizationArgs: FindOrganizationInput): Promise<Organization> {

    const organization = await this.organizationRepo.findOne(findOrganizationArgs);
    return organization;
  }

  async searchOrganizations(findOrganizationArgs: FindOrganizationInput): Promise<Organization[]> {

    const organizations = await this.organizationRepo.find(findOrganizationArgs);
    return organizations;
  }

  async deleteOrganization({ id }: DeleteOrganizationInput): Promise<DeleteResult> {

    const res = await this.organizationRepo.delete({ id });
    return res;
  }

  // #endregion CRUD

}
