import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class DeleteTourInput {
  
  @ApiProperty()
  id: number
  
  @ApiPropertyOptional()
  title: string

}