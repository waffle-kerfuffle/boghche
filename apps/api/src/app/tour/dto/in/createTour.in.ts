import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { CreatePlaceInput } from "../../../place/dto/in/createPlace.in.entity"
import { CreatePhotoInput } from "../../../upload/dto/in/createPhoto.in"
import { ApprovalStatus } from "../../models/approvalStatus"
import { DestinationType } from "../../models/DestinationType"

export class CreateTourInput {

  @ApiProperty({ example: 'تور پاتایا' })
  title: string

  @ApiPropertyOptional({ example: 'بسیار هیجان انگیز' })
  description?: string

  @ApiPropertyOptional()
  caption?: string

  @ApiProperty({ description: 'مبدا' })
  dispatch: CreatePlaceInput

  @ApiProperty({ description: 'مقصد' })
  destination: CreatePlaceInput

  @ApiProperty({ example: Object.values(DestinationType)[0], description: 'نوع مقصد، فقط از: ' + Object.values(DestinationType).join('-') })
  destinationType: DestinationType

  @ApiPropertyOptional()
  bannerUrl?: string

  @ApiPropertyOptional({ example: [{ url: 'https://png.pngtree.com/png-vector/20201229/ourlarge/pngtree-a-british-short-blue-and-white-cat-png-image_2654518.jpg', caption: 'string' }] })
  photos?: CreatePhotoInput[]

  @ApiProperty({ description: 'مدت زمان' })
  duration: Date

  @ApiProperty({ description: 'قیمت', example: 69000 })
  price: number

  @ApiProperty({ description: 'ظرفیت', example: 20 })
  capacity: number

  @ApiPropertyOptional({ description: 'وضعیت تایید' , example: 0 } )
  approvalStatus: ApprovalStatus = ApprovalStatus.pending

  @ApiProperty({ description: 'آی دی شرکت', example: 1 })
  organizationId: number

}