import { ApiPropertyOptional } from "@nestjs/swagger"

export class FindUserInput {

  @ApiPropertyOptional()
  id?: number

  @ApiPropertyOptional()
  name?: string

  @ApiPropertyOptional()
  pass?: string
  
  @ApiPropertyOptional()
  telno?: string
  
  @ApiPropertyOptional()
  avatarUrl?: string
  
}