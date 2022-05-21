import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { ApprovalStatus } from "../../models/approvalStatus"

export class CreateTourInput {

  @ApiProperty()
  title: string

  @ApiPropertyOptional()
  description: string

  @ApiPropertyOptional()
  bannerUrl: string

  @ApiPropertyOptional()
  galleryUrls: string[]

  /** مدت زمان */
  @ApiProperty()
  duration: Date

  @ApiProperty()
  price: number

  @ApiProperty()
  capacity: number

  @ApiPropertyOptional()
  approvalStatus: ApprovalStatus
  
}