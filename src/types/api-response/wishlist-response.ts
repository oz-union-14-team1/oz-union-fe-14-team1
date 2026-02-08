/**
 * 위시리스트 API 응답 타입
 */

export type WishlistGame = {
  id: number
  game: number
  gameName: string
  gameImage: string
  createdAt: string
}

export type GetWishlist = WishlistGame[]

export type PostWishlistRequest = {
  game: number
}

export type PostWishlistResponse = {
  game: number
}

export type DeleteWishlistResponse = {
  detail?: string
}
