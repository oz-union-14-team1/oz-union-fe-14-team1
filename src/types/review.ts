import { StaticImageData } from 'next/image'

export type MockReviewType = {
  id: string
  category: string
  gameId: string
  gameName: string
  gameImgUrl: string | StaticImageData
  rating: number
  content: string
  createdAt: string
  updatedAt?: string
}
