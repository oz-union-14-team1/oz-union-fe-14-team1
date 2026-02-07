import { delay, http, HttpResponse } from 'msw'

import { API_PATH, MSW_BASE_URL } from '@/constants/apiPath'

export const onboardingHandlers = [
  http.get(`${MSW_BASE_URL}${API_PATH.ONBOARDING_TAGS}`, async () => {
    return HttpResponse.json([
      { id: 1, tag: 'Singleplayer', slug: 'singleplayer' },
      { id: 2, tag: 'Multiplayer', slug: 'multiplayer' },
      { id: 3, tag: 'Co-op', slug: 'co-op' },
      { id: 4, tag: 'PvP', slug: 'pvp' },
      { id: 5, tag: 'Open World', slug: 'open-world' },
      { id: 6, tag: 'Story Rich', slug: 'story-rich' },
      { id: 7, tag: 'Atmospheric', slug: 'atmospheric' },
      { id: 8, tag: 'Great Soundtrack', slug: 'great-soundtrack' },
      { id: 9, tag: 'RPG', slug: 'rpg' },
      { id: 10, tag: 'Action', slug: 'action' },
    ])
  }),

  http.get(`${MSW_BASE_URL}${API_PATH.ONBOARDING_GENRES}`, async () => {
    return HttpResponse.json([
      { id: 1, genre: 'Action', slug: 'action' },
      { id: 2, genre: 'RPG', slug: 'rpg' },
      { id: 3, genre: 'Adventure', slug: 'adventure' },
      { id: 4, genre: 'Strategy', slug: 'strategy' },
      { id: 5, genre: 'Simulation', slug: 'simulation' },
      { id: 6, genre: 'Puzzle', slug: 'puzzle' },
      { id: 7, genre: 'Horror', slug: 'horror' },
      { id: 8, genre: 'Racing', slug: 'racing' },
      { id: 9, genre: 'Sports', slug: 'sports' },
      { id: 10, genre: 'Shooting', slug: 'shooting' },
      { id: 11, genre: 'Roguelike', slug: 'roguelike' },
      { id: 12, genre: 'Arcade', slug: 'arcade' },
    ])
  }),

  http.post(
    `${MSW_BASE_URL}${API_PATH.ONBOARDING_PREFERENCE}`,
    async ({ request }) => {
      const body = await request.json()
      console.log('MSW: savePreference 호출됨', body)

      await delay(3000)

      return HttpResponse.json({ success: true })
    }
  ),

  http.get(`${MSW_BASE_URL}${API_PATH.ONBOARDING_AI_TENDENCY}`, () => {
    console.log('MSW: AI Tendency 핸들러 실행됨')
    return HttpResponse.json({
      tendency: '낭만파 RPG 전사',
    })
  }),
]
