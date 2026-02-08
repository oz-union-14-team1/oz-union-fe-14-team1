import { API_BASE_URL, API_PATH } from '@/constants/apiPath'
import { GameList } from '@/types/api-response/game-response'
import { camelApi } from '@/utils'

export const getSearchParams = async (
  q: string,
  page = 1
): Promise<GameList> => {
  const res = await camelApi.get<GameList>(
    `${API_BASE_URL}${API_PATH.GAMES_SEARCH}`,
    {
      params: { q, page },
    }
  )
  return res.data
}
