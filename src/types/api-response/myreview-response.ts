export type MyReview = {
  id: number
  author: {
    id: number
    nickname: string
    profileImgUrl: string
  }
  content: string
  rating: number
  likeCount: number
  createdAt: string
  gameTitle: string
  gameGenres: string[]
}

export type GetMyReviews = {
  count: number
  next: string | null
  previous: string | null
  results: MyReview[]
}

// export type GetMyReviews = MyReview[]
