export type Game = {
  gameId: number
  gameName: string
  imgUrl: string
  genreId?: number[] // 추가예정
  tagId?: number[] // 추가예정
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
  platformName: string
  platformUrl: string
  release: string
  developer: string
  publisher: string
  playTime: string
}

/*
 * GET /games 요청 파라미터
 * 백엔드 명세서 확인 후 수정예정
 */
export type GameFilterParams = {
  genre_id?: string
  tag_id?: string
  year?: string
  min_score?: string
  page?: number
}
