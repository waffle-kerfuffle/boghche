import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class CreateOrganizationInput {

  @ApiProperty({ example: 'Cool Tour' })
  organizationName: string

  @ApiPropertyOptional()
  logoUrl: string

  @ApiPropertyOptional()
  description: string

  @ApiProperty({ example: 1, description: 'در آینده نیاز به ارسال این نخواهد بود' })
  leaderId: number

}