import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class FindOrganizationInput {

  @ApiPropertyOptional()
  id?: number
  
  @ApiPropertyOptional()
  organizationName?: string
  
  @ApiPropertyOptional()
  logoUrl?: string
  
  @ApiPropertyOptional()
  description?: string

}