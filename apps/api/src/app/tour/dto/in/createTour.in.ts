import { ApiProperty } from "@nestjs/swagger"

export class CreateTourInput {
  
  @ApiProperty()
  title: string
  
  @ApiProperty()
  description: string
  
  @ApiProperty()
  bannerUrl: string
  
  /** مدت زمان */
  @ApiProperty()
  duration: Date
  
  @ApiProperty()
  price: number
  
  @ApiProperty()
  capacity: number
}