interface Tour {
  id: number
  dateCreated: Date
  title: string
  description: string
  bannerUrl: string
  galleryUrls: string[]
  /** مدت زمان */
  duration: Date
  price: number
  capacity: number
  /** امتیاز ها */
  ratings: number
  comments: Comment[]
}