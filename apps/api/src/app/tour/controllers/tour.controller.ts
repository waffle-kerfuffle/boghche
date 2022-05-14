import { Controller, Get } from '@nestjs/common';
import { Tour } from '../dto/out/tour.out';

@Controller('tour')
export class TourController {

  readonly tours: Tour[] = [
    {
      id: 0,
      dateCreated: new Date(),
      title: 'جزایر لانگر هاوس',
      description: 'نزدیکی های کبد',
      bannerUrl: 'https://picsum.photos/200/300',
      galleryUrls: ['https://picsum.photos/200/200', 'https://picsum.photos/200/350', 'https://picsum.photos/200/600'],
      /** مدت زمان */
      duration: new Date(),
      price: 150000,
      capacity: 15,
      /** امتیاز ها */
      ratings: 4.5,
      comments: [],
    },
    {
      id: 1,
      dateCreated: new Date(),
      title: 'پاتایا',
      description: 'پاشو بریم پاتایا',
      bannerUrl: 'https://picsum.photos/200/400',
      galleryUrls: ['https://picsum.photos/200/190'],
      /** مدت زمان */
      duration: new Date(),
      price: 169000,
      capacity: 2,
      /** امتیاز ها */
      ratings: 4.3,
      comments: [],
    },
    {
      id: 2,
      dateCreated: new Date(),
      title: 'کره ماه',
      description: 'بدون شرح',
      bannerUrl: 'https://picsum.photos/200/128',
      galleryUrls: [],
      /** مدت زمان */
      duration: new Date(),
      price: 850850,
      capacity: 4,
      /** امتیاز ها */
      ratings: 3.0,
      comments: [],
    },
  ]

  @Get('list')
  getData() {
    return this.tours;
  }

}
