import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import { Game, GameDetail, GameList } from '@/types/api-response/game-response'
import { camelApi } from '@/utils/axios'

/**
 * 전체 게임 목록
 */
export const getGames = async (): Promise<Game[]> => {
  const [page1, page2] = await Promise.all([
    camelApi.get<GameList>(`${API_BASE_URL}${API_PATH.GAMES}?page_size=40`),
    camelApi.get<GameList>(
      `${API_BASE_URL}${API_PATH.GAMES}?page=2&page_size=40`
    ),
  ])

  return [...page1.data.results, ...page2.data.results]
}
/**
 * 게임상세
 */
export const getGameDetail = async (gameId: number) => {
  const res = await camelApi.get<GameDetail>(
    `${API_BASE_URL}${API_PATH.GAME_DETAIL(gameId)}`
  )
  return res.data
}

/**
 * 선호 장르 기반 추천 게임목록
 * - 로그인 필요
 * - preference에서 설정된 태그/장르 기반
 */
export const getRecommendByPreference = async (): Promise<GameList> => {
  const res = await camelApi.get<GameList>(
    `${API_BASE_URL}${API_PATH.GAMES_RECOMMEND_PREFERENCE}`
  )
  return res.data
}

/**
 * Wishlist 기반 추천 게임 목록
 * - 로그인 필요
 */
export const getRecommendByWishlist = async (): Promise<GameList> => {
  const res = await camelApi.get<GameList>(
    `${API_BASE_URL}${API_PATH.GAMES_RECOMMEND_WISHLIST}`
  )
  return res.data
}
