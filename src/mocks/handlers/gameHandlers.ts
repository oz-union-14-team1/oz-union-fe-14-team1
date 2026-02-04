import { http, HttpResponse } from 'msw'

import { API_PATH, MSW_BASE_URL } from '@/constants/apiPath'
import { MOCK_GAMES } from '@/mocks/data/mockGames'

export const gameHandlers = [
  http.get(`${MSW_BASE_URL}${API_PATH.GAMES}`, ({ request }) => {
    const url = new URL(request.url)
    const genreId = url.searchParams.get('genre_id')
    const tagId = url.searchParams.get('tag_id')
    const year = url.searchParams.get('year')
    // const minScore = url.searchParams.get('min_score')
    const page = Number(url.searchParams.get('page') ?? 1)

    /**
     * TEMP:
     * 현재 MSW 단계에서만 사용하는 클라이언트 필터 로직
     * 백엔드 필터 API 적용 시 제거 예정
     */
    let filteredGames = [...MOCK_GAMES]

    if (genreId) {
      const genreIds = genreId.split(',').map(String)
      filteredGames = filteredGames.filter((game) =>
        game.genres?.some((id) => genreIds.includes(id))
      )
    }

    if (tagId) {
      const tagIds = tagId.split(',').map(String)
      filteredGames = filteredGames.filter((game) =>
        game.genres?.some((id) => tagIds.includes(id))
      )
    }

    if (year) {
      const years = year.split(',').map(Number)
      filteredGames = filteredGames.filter((game) => {
        const gameYear = new Date(game.releasedAt!).getFullYear()
        return years.includes(gameYear)
      })
    }

    // if (minScore) {
    //   filteredGames = filteredGames.filter(
    //     (game) => (game. ?? 0) >= Number(minScore)
    //   )
    // }

    return HttpResponse.json({
      page,
      results: filteredGames,
    })
  }),
]
