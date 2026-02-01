import { Genre } from './api-response/onboarding-response'

export type GenreWithMeta = Genre & {
  description: string
  backgroundImage: string
}
