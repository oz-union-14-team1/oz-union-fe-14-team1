export type ReviewAuthor = {
  id: number
  nickname: string
  profileImgUrl: string | null
}

export type Review = {
  id: number
  author: ReviewAuthor
  content: string
  rating: number
  likeCount: number
  createdAt: Date
}

/** GET /api/v1/community/{game_id}/reviews 응답 */
export type ReviewList = {
  count: number
  next: string | null
  previous: string | null
  results: Review[]
}

export type ReviewCommentAuthor = {
  id: number
  nickname: string
  profileImgUrl: string | null
}

export type ReveiwComment = {
  id: number
  author: ReviewCommentAuthor
  content: string
  createdAt: Date
}

/** GET /api/vi/community/reviews/{review_id}/comments 응답 */
export type ReviewDetail = Review & {
  comments: ReveiwComment[]
}
