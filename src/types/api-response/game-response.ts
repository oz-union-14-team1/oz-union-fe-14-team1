export type Game = {
  id: number
  name: string
  tag?: string[]
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
export type GameDetail = Omit<Game, 'image'> & {
  intro: string
  developer: string
  publisher: string
  releasedAt: string
  genres: string[]
  tags: string[]
  platforms: string[]
  images: string[]
}

/*
 * GET /games 요청 파라미터
 * 백엔드 명세서 확인 후 수정예정
 */
// export type GameFilterParams = {
//   genre_id?: string
//   tag_id?: string
//   year?: string
//   min_score?: string
//   page?: number
// }
