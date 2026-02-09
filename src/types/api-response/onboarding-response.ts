export type Tag = {
  id: number
  tag: string
  slug: string
}

export type Genre = {
  id: number
  genre: string
  slug: string
}

/** POST /api/v1/user/preference 요청 */
export type PreferenceRequest = {
  Tags: number[]
  Genres: number[]
}

/** GET /api/v1/community/summary/user/tendency 응답 */
export type PreferenceResponse = {
  tendency: string
}
