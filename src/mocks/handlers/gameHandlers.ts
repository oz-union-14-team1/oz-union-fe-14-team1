import { http, HttpResponse, passthrough } from 'msw'

import { MOCK_GAME_DETAIL } from '@/mocks/data/mockGameDetail'
import { MOCK_GAME } from '@/mocks/data/mockGameList'

export const gameHandlers = [
  http.get('*/game/', ({ request }) => {
    const url = new URL(request.url)
    const page = Number(url.searchParams.get('page') ?? 1)

    const useMock = url.searchParams.get('mock')

    if (useMock === 'true') {
      return HttpResponse.json({
        page,
        results: MOCK_GAME,
      })
    }
    return passthrough()
  }),

  http.get('*/game/:id', ({ params }) => {
    const { id } = params

    const game = MOCK_GAME_DETAIL.find((g) => g.id === Number(id))

    return HttpResponse.json(game ?? MOCK_GAME_DETAIL[0])
  }),
]
