import { http, HttpResponse } from 'msw'

import { GenreSlug } from '@/assets/genre-assets/genreData'
import { GENRE_NAMES_KR } from '@/assets/genre-assets/genreName'
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

  http.get('*/game/genre/:slug', ({ params }) => {
    const slug = params.slug as GenreSlug
    const genreKR = GENRE_NAMES_KR[slug]

    const filtered = MOCK_GAME_DETAIL.filter((game) =>
      game.genres.includes(genreKR)
    ).map((detail) => ({
      id: detail.id,
      name: detail.name,
      tags: detail.tags,
      image: detail.images[0],
      releasedAt: detail.releasedAt,
      platforms: detail.platforms,
    }))

    return HttpResponse.json(filtered)
  }),
]
