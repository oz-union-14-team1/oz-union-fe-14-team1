import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import {
  DeleteWishlistResponse,
  GetWishlist,
  PostWishlistRequest,
  PostWishlistResponse,
} from '@/types/api-response/wishlist-response'
import camelApi from '@/utils/axios'

/**
 * 위시리스트 조회
 * GET /api/v1/game/wishlist
 */
export const getWishlistApi = async (): Promise<GetWishlist> => {
  const res = await camelApi.get<GetWishlist>(
    `${API_BASE_URL}${API_PATH.GET_WISHLIST_API_PATH}`
  )
  return res.data
}

/**
 * 위시리스트 추가
 * POST /api/v1/game/wishlist
 */
export const postWishlistApi = async (
  data: PostWishlistRequest
): Promise<PostWishlistResponse> => {
  const res = await camelApi.post<PostWishlistResponse>(
    `${API_BASE_URL}${API_PATH.POST_WISHLIST_API_PATH}`,
    data
  )
  return res.data
}

/**
 * 위시리스트 삭제
 * DELETE /api/v1/game/wishlist/{id}
 */
export const deleteWishlistApi = async (
  game: number
): Promise<DeleteWishlistResponse> => {
  const res = await camelApi.delete<DeleteWishlistResponse>(
    `${API_BASE_URL}${API_PATH.DELETE_WISHLIST_API_PATH(game)}`
  )
  return res.data
}
