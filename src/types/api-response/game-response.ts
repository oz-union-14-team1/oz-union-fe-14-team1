export type Game = {
  id: number
  name: string
  tags?: string[]
  image?: string
  releasedAt: string
  platforms?: string[]
}

/** GET /api/v1/games 응답 */
export type GameList = {
  page: number
  results: Game[]
}

/** GET /api/vi/games/{game_id} 응답 */
export type GameDetail = {
  id: number
  name: string
  tags: string[] // optional → required
  releasedAt: string
  intro: string
  developer: string
  publisher: string
  genres: string[]
  platforms: string[] // optional → required
  images: string[] // image → images (복수)
  avgScore: number
}
