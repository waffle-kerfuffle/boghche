import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export class CreateUserInput {

  @ApiProperty()
  name: string
  
  @ApiProperty()
  pass: string
  
  // <- File Uploaded seperately
  
}