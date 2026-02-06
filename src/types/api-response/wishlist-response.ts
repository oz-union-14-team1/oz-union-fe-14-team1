/**
 * 위시리스트 API 응답 타입 (실제 백엔드 명세)
 */

export type WishlistGame = {
  id: number // 위시리스트 항목 ID
  game: number // 게임 ID
  game_name: string
  game_image: string
  created_at: string
}

export type GetWishlist = WishlistGame[]

export type PostWishlistRequest = {
  game: number
}

export type PostWishlistResponse = {
  game: number
}

export type DeleteWishlistResponse = {
  message?: string
}
