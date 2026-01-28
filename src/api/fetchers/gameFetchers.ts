import { API_PATH, MSW_BASE_URL } from '@/constants/apiPath'
import {
  GameDetail,
  GameFilterParams,
  GameList,
} from '@/types/api-response/game-response'
import { api } from '@/utils'

export const getGames = async (params?: GameFilterParams) => {
  const res = await api.get<GameList>(`${MSW_BASE_URL}${API_PATH.GAMES}`, {
    params,
  })
  return res.data
}

export const getGameDetail = async (gameId: number) => {
  const res = await api.get<GameDetail>(
    `${MSW_BASE_URL}${API_PATH.GAME_DETAIL(gameId)}`
  )
  return res.data
}
