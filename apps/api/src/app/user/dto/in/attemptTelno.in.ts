import { ApiProperty } from "@nestjs/swagger";

export class AttemptTelnoInput {

  @ApiProperty()
  telno: string
  
  @ApiProperty()
  code: string

}