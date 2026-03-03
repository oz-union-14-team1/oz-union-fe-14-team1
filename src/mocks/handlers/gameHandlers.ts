import { http, HttpResponse } from 'msw'

import { MOCK_GAME_DETAIL } from '@/mocks/data/mockGameDetail'
import { MOCK_GAME } from '@/mocks/data/mockGameList'

export const gameHandlers = [
  http.get('*/game/', () => {
    return HttpResponse.json({
      page: 1,
      results: MOCK_GAME,
    })
  }),

  http.get('*/game/:id', ({ params }) => {
    const { id } = params

    const game = MOCK_GAME_DETAIL.find((g) => g.id === Number(id))

    return HttpResponse.json(game ?? MOCK_GAME_DETAIL[0])
  }),
]
