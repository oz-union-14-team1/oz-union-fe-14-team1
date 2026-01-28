export type Game = {
  game_id: number
  game_name: string
  img_url: string
  genre_id?: number[] // 추가예정
  tag_id?: number[] // 추가예정
  release?: string // 백엔드 필터api 업데이트 후 수정예정
  score?: number // 백엔드 필터api 업데이트 후 수정예정
}

/** GET /api/v1/games 응답 */
export type GameList = {
  page: number
  results: Game[]
}

/** GET /api/vi/games/{game_id} 응답 */
export type GameDetail = Game & {
  intro: string
  score: number
  platform_name: string
  platform_url: string
  release: string
  developer: string
  publisher: string
}
