import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class UpdateTourInput {
  @ApiProperty()
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
}