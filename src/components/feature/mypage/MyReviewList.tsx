'use client'

import { MessageSquare } from 'lucide-react'

import { useGetMyReviews } from '@/api/queries/useGetMyReviews'

import { MyReviewListSectionUi, MyReviewListWelcomeUi } from './ui'

function MyReviewList() {
  const { data: myReviews = [], isLoading } = useGetMyReviews()
  const reviewCount = myReviews.length
  const hasReviews = reviewCount > 0

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center">
        <div className="mb-35 flex min-w-0 flex-1 items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="shrink-0 rounded-full bg-gradient-to-br from-main-purple/20 to-main-fuchsia/20 p-1.5 md:p-2">
              <MessageSquare className="h-4 w-4 fill-main-purple text-main-purple md:h-6 md:w-6" />
            </div>
            <h2 className="truncate text-lg font-bold text-text-light md:text-2xl">
              내가쓴리뷰
            </h2>
          </div>
        </div>
        <div className="flex h-64 items-center justify-center">
          <p className="text-muted-foreground">리뷰를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="mb-35 flex min-w-0 flex-1 items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="shrink-0 rounded-full bg-gradient-to-br from-main-purple/20 to-main-fuchsia/20 p-1.5 md:p-2">
            <MessageSquare className="h-4 w-4 fill-main-purple text-main-purple md:h-6 md:w-6" />
          </div>
          <h2 className="truncate text-lg font-bold text-text-light md:text-2xl">
            내가쓴리뷰
          </h2>
        </div>
        {reviewCount > 0 && (
          <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-text-light/80 backdrop-blur-sm md:px-3 md:py-1 md:text-sm">
            <span className="md:hidden">{reviewCount}</span>
            <span className="hidden md:inline">{reviewCount}개의 리뷰</span>
          </span>
        )}
      </div>

      {hasReviews ? (
        <>
          <div>
            {myReviews.map((review) => (
              <MyReviewListSectionUi key={review.id} review={review} />
            ))}
          </div>
          <MyReviewListWelcomeUi />
        </>
      ) : (
        <MyReviewListWelcomeUi />
      )}
    </div>
  )
}

export default MyReviewList
