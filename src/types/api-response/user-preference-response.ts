export type GenreItem = {
  id: number
  genre: string
}

export type TagItem = {
  id: number
  tag: string
}

/** GET /api/vi/user/preference/ 응답 */
export type UserPreferenceResponse = {
  Genres: GenreItem[]
  Tags: TagItem[]
}
