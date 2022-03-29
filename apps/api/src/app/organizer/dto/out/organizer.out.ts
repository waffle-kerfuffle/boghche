export interface Organizer {
  id: number
  name: string
  logoUrl: string
  bio: string
  gallery: string[]
  tours: Tour[]
  rating: number
  awards: number
}