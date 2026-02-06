export type MyReview = {
  id: number
  author: {
    id: number
    nickname: string
    profile_img_url: string
  }
  content: string
  rating: number
  like_count: number
  created_at: string
}

export type GetMyReviews = MyReview[]
