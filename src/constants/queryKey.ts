export const QUERY_KEYS = {
  GAMES: ['game'] as const,
  GAME_DETAIL: (gameId: number) => ['game', gameId],
  GAME_RECOMMEND_PREFERENCE: ['game', 'recommend', 'preference'] as const,
  GAME_RECOMMEND_WISHLIST: ['game', 'recommend', 'whishlist'] as const,
  GAME_LIST: (params: { page: number }) => ['game', 'list', params] as const,
  USER_PREFERENCE: ['preference'] as const,
  GAME_SEARCH_PARAM: (q: string, page = 1) =>
    ['games', 'search', q, page] as const,
} as const
