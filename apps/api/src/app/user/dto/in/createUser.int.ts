import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class CreateUserInput {

  @ApiProperty()
  name: string

  @ApiProperty()
  pass: string

  @ApiProperty()
  telno: string

  @ApiPropertyOptional()
  avatarUrl: string

  // <- File Uploaded seperately

}