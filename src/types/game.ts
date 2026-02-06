export type GameId = number | string

export type Game = {
  gameId: GameId
  gameName: string
  imgUrl: string[]
  genreId?: number[]
  tagId?: number[]
  release?: string
  score?: number
}
