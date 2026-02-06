export type GameId = number | string

export type Game = {
  id: GameId
  name: string
  image: string
  tag?: string[]
  releaseeAt?: string
  platforms?: string[]
}
