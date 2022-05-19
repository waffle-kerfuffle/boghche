import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class SignupInput {

  @ApiProperty()
  name: string

  @ApiProperty()
  pass: string

  @ApiProperty()
  telno: string

  @ApiPropertyOptional()
  avatarUrl: string

}