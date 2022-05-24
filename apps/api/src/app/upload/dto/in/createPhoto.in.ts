import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePhotoInput {

  @ApiProperty({ example: 'https://png.pngtree.com/png-vector/20201229/ourlarge/pngtree-a-british-short-blue-and-white-cat-png-image_2654518.jpg' })
  url: string
  
  @ApiPropertyOptional()
  caption?: string

}