import { ApiProperty } from "@nestjs/swagger";

export class LoginInput {

  @ApiProperty()
  telno: string;

  @ApiProperty()
  pass: string;

}