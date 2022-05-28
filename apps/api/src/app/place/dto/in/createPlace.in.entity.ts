import { ApiProperty } from "@nestjs/swagger"

export class CreatePlaceInput {

  @ApiProperty({ example: 'اینجا' })
  name: string

  @ApiProperty({ example: 33.867886 })
  latitude: number

  @ApiProperty({ example: -63.987 })
  longitude: number

}