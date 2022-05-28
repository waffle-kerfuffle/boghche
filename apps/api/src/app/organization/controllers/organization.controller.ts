import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { CreateOrganizationInput } from '../dto/in/createOrganization.in';
import { DeleteOrganizationInput } from '../dto/in/deleteOrganization.in';
import { FindOrganizationInput } from '../dto/in/findOrganization.in';
import { OrganizationCompleteOutput } from '../dto/out/organizationComplete.out';
import { OrganizationListOutput } from '../dto/out/organizationList.out';
import { Organization } from '../model/organization.entity';
import { OrganizationService } from '../services/organization.service';

@ApiTags('organization')
@Controller('organization')
export class OrganizationController {

  constructor(
    private organizationSv: OrganizationService
  ) { }

  // #region CRUD

  @Get('list')
  async getAllOrganizations(): Promise<OrganizationListOutput[]> {
    const organizations: Organization[] = await this.organizationSv.getAllOrganizations();

    const res: OrganizationListOutput[] = organizations.map(organization => OrganizationListOutput.fromEntity(organization));
    return res;
  }

  @Post('find')
  async findOrganization(@Body() findOrganizationArgs: FindOrganizationInput): Promise<OrganizationCompleteOutput> {
    const organization = await this.organizationSv.findOrganization(findOrganizationArgs);

    const res: OrganizationCompleteOutput = OrganizationCompleteOutput.fromEntity(organization);
    return res;
  }

  @Post('search')
  async searchOrganizations(@Body() findTOurArgs: FindOrganizationInput): Promise<OrganizationCompleteOutput[]> {
    const organizations = await this.organizationSv.searchOrganizations(findTOurArgs);

    const res: OrganizationCompleteOutput[] = organizations.map(organization => OrganizationCompleteOutput.fromEntity(organization));
    return res;
  }

  @Post('create')
  async createOrganization(@Body() { leaderId, ...organizationData }: CreateOrganizationInput): Promise<OrganizationCompleteOutput> {
    const organization = await this.organizationSv.createOrganization({ ...organizationData, leaderId }, leaderId);
    //                                                                                       ^^^^^^^^ will be deleted when sessions are implemented

    const res: OrganizationCompleteOutput = OrganizationCompleteOutput.fromEntity(organization);
    return res;
  }

  @Delete('delete')
  async deleteOrganization(@Body() deleteOrganizationArgs: DeleteOrganizationInput): Promise<DeleteResult> {
    const res = await this.organizationSv.deleteOrganization(deleteOrganizationArgs);
    return res;
  }

  // #endregion CRUD

}
