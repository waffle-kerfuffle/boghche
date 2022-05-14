export interface GetTourInput {
  id: number
  title: string
  description: string
  bannerUrl: string
  /** مدت زمان */
  duration: Date
  price: number
  capacity: number
}