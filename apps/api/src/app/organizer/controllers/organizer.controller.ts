import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Organizer } from '../dto/out/organizer.out';

@ApiTags('organizer')
@Controller('organizer')
export class OrganizerController {

  readonly organizers: Organizer[] = [
    {
      id: 1,
      name: 'بریم پاتایا',
      awards: 4,
      logoUrl: 'https://picsum.photos/200/200',
      bio: `به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش `,
      gallery: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      rating: 1.5,
      tours: [
        // {
        //   id: 0,
        //   dateCreated: new Date(),
        //   title: 'جزایر لانگر هاوس',
        //   description: 'نزدیکی های کبد',
        //   bannerUrl: 'https://picsum.photos/200/300',
        //   galleryUrls: ['https://picsum.photos/200/200', 'https://picsum.photos/200/350', 'https://picsum.photos/200/600'],
        //   /** مدت زمان */
        //   duration: new Date(),
        //   price: 150000,
        //   capacity: 15,
        //   /** امتیاز ها */
        //   ratings: 4.5,
        //   comments: [],
        // },
        // {
        //   id: 1,
        //   dateCreated: new Date(),
        //   title: 'پاتایا',
        //   description: 'پاشو بریم پاتایا',
        //   bannerUrl: 'https://picsum.photos/200/400',
        //   galleryUrls: ['https://picsum.photos/200/190'],
        //   /** مدت زمان */
        //   duration: new Date(),
        //   price: 169000,
        //   capacity: 2,
        //   /** امتیاز ها */
        //   ratings: 4.3,
        //   comments: [],
        // },
      ]
    },
    {
      id: 2,
      name: 'الاف های تبریز',
      awards: 12,
      logoUrl: 'https://picsum.photos/150/150',
      bio: `به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش `,
      gallery: [
        'https://picsum.photos/200/300',
      ],
      rating: 1.9,
      tours: [
        // {
        //   id: 2,
        //   dateCreated: new Date(),
        //   title: 'پاتایا',
        //   description: 'پاشو بریم پاتایا',
        //   bannerUrl: 'https://picsum.photos/200/400',
        //   galleryUrls: ['https://picsum.photos/200/190'],
        //   /** مدت زمان */
        //   duration: new Date(),
        //   price: 175000,
        //   capacity: 2,
        //   /** امتیاز ها */
        //   ratings: 4.3,
        //   comments: [],
        // },
      ]
    },
    {
      id: 3,
      name: 'اراذل ولگرد',
      awards: 12,
      logoUrl: 'https://picsum.photos/164/164',
      bio: `به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش `,
      gallery: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      rating: 3,
      tours: [
      ]
    },

  ]

  @Get('list')
  getData() {
    return this.organizers;
  }

  @Get('find')
  find(@Query('id') organizerId:number) {
    return this.organizers.filter(org => org.id == organizerId)
  }
  

}
