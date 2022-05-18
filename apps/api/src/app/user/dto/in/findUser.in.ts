import { ApiPropertyOptional } from "@nestjs/swagger"

export class FindUserInput {

  @ApiPropertyOptional()
  id: number

  @ApiPropertyOptional()
  name: string

  @ApiPropertyOptional()
  pass: string
  
  @ApiPropertyOptional()
  avatarUrl: string

  @ApiPropertyOptional()
  telno: string
  
}