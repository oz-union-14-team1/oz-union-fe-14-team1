export type Game = {
  game_id: number
  game_name: string
  img_url: string
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
  release: Date
  developer: string
  publisher: string
}
