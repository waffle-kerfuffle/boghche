export interface CreateTourInput {
  title: string
  description: string
  bannerUrl: string
  /** مدت زمان */
  duration: Date
  price: number
  capacity: number
}