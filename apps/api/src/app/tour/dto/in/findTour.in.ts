import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { ApprovalStatus } from "../../models/approvalStatus"

export class FindTourInput {
  
  @ApiPropertyOptional()
  id: number
  
  @ApiPropertyOptional()
  title: string
  
  @ApiPropertyOptional()
  description: string
  
  @ApiPropertyOptional()
  bannerUrl: string
  
  /** مدت زمان */
  @ApiPropertyOptional()
  duration: Date
  
  @ApiPropertyOptional()
  price: number
  
  @ApiPropertyOptional()
  capacity: number
  
  @ApiPropertyOptional()
  approvalStatus: ApprovalStatus
  
}