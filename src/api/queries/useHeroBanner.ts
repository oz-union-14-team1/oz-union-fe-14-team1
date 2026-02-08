import { useQueries, useQuery } from '@tanstack/react-query'

import { FALLBACK_IMG_HORIZONTAL } from '@/constants/fallback'
import { QUERY_KEYS } from '@/constants/queryKey'
import { Banner } from '@/types/banner'

import { getGameDetail, getGames } from '../fetchers/gameFetchers'

export const useHeroBanner = () => {
  const { data: gameList, isLoading: isGameListLoading } = useQuery({
    queryKey: QUERY_KEYS.GAME_LIST({ page: 1 }),
    queryFn: getGames,
  })

  const gameIds = gameList?.results.slice(0, 5).map((game) => game.id) || []

  const GameDetailQueries = useQueries({
    queries: gameIds.map((gameId) => ({
      queryKey: QUERY_KEYS.GAME_DETAIL(gameId),
      queryFn: () => getGameDetail(gameId),
      enabled: gameIds.length > 0,
    })),
  })

  const isLoading =
    isGameListLoading || GameDetailQueries.some((q) => q.isLoading)

  const banners: Banner[] = GameDetailQueries.filter((q) => q.data).map((q) => {
    const detail = q.data!
    return {
      id: detail.id,
      title: detail.name,
      imgUrl: detail.images[0] || FALLBACK_IMG_HORIZONTAL,
      description: detail.intro,
      tag: detail.tags.slice(0, 3),
      genre: detail.genres.slice(0, 4),
    }
  })
  return { banners, isLoading }
}
