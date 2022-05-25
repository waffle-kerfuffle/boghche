import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class SignupInput {

  @ApiProperty({ example: 'Sedge' })
  name: string

  @ApiProperty({ example: '12345678' })
  pass: string

  @ApiProperty({ example: '09355932930' })
  telno: string

  @ApiPropertyOptional({ example: 'I am cool' })
  bio: string
  
  @ApiPropertyOptional()
  avatarUrl: string

}