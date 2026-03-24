import { http, HttpResponse } from 'msw'

import { GenreSlug } from '@/assets/genre-assets/genreData'
import { GENRE_NAMES_KR } from '@/assets/genre-assets/genreName'
import { MOCK_GAME_DETAIL } from '@/mocks/data/mockGameDetail'
import { MOCK_GAME } from '@/mocks/data/mockGameList'

export const gameHandlers = [
  http.get('*/game/genre/:slug', ({ params, request }) => {
    const slug = params.slug as GenreSlug
    const genreKR = GENRE_NAMES_KR[slug]
    const url = new URL(request.url)
    const sort = url.searchParams.get('sort')

    const platforms = url.searchParams.get('platforms')?.split(',')
    const years = url.searchParams.get('year')?.split(',').map(Number)
    const minScore = Number(url.searchParams.get('min_score') ?? 0)

    const filtered = MOCK_GAME_DETAIL.filter(
      (game) =>
        game.genres.includes(genreKR) &&
        (!platforms?.length ||
          game.platforms.some((p) => platforms.includes(p))) &&
        (!years?.length ||
          years.includes(new Date(game.releasedAt).getFullYear())) &&
        game.avgScore >= minScore
    )
      .sort((a, b) => {
        if (sort === 'score') {
          return b.avgScore - a.avgScore
        }
        if (sort === 'latest') {
          return (
            new Date(b.releasedAt).getTime() - new Date(a.releasedAt).getTime()
          )
        }
        return 0
      })
      .map((detail) => ({
        id: detail.id,
        name: detail.name,
        tags: detail.tags,
        image: detail.images[0],
        releasedAt: detail.releasedAt,
        platforms: detail.platforms,
      }))

    return HttpResponse.json(filtered)
  }),

  http.get('*/game/:id', ({ params }) => {
    const { id } = params

    const game = MOCK_GAME_DETAIL.find((g) => g.id === Number(id))

    return HttpResponse.json(game ?? MOCK_GAME_DETAIL[0])
  }),

  http.get('*/game/', () => {
    return HttpResponse.json({
      page: 1,
      results: MOCK_GAME,
    })
  }),
]
