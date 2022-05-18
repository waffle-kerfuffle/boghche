import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateUserInput {

  @ApiProperty()
  id: number

  @ApiPropertyOptional()
  name: string

  @ApiPropertyOptional()
  avatarUrl: string

}