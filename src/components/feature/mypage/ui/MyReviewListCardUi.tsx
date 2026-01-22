import { ThumbsDown, ThumbsUp } from 'lucide-react'
import Link from 'next/link'

import { MockReviewType } from '@/types'

import { formatDate } from './MyReviewListWelcomeUi'

export default function MyReviewListCardUi({
  review,
}: {
  review: MockReviewType
}) {
  return (
    <Link
      href={`/review/${review.id}`}
      className="-mt-28 flex min-h-[200px] max-w-full flex-1 flex-col items-start justify-start gap-2 overflow-hidden bg-background px-3 py-4 opacity-60 shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-100 group-hover:shadow-[0_15px_60px_rgba(0,0,0,0.4)] md:-mt-30 md:min-h-[240px] md:gap-4 md:px-4 md:py-6 lg:gap-10 lg:px-8"
    >
      <div className="flex items-center gap-2 md:hidden">
        <p className="text-[10px] font-medium text-text-secondary transition-all duration-300">
          {formatDate(review.createdAt)}
        </p>
        <div className="h-px flex-1 bg-text-secondary/30" />
      </div>

      <div className="flex flex-1 items-start justify-start gap-2 overflow-hidden md:gap-4 lg:gap-8">
        <div className="flex w-[150px] flex-col items-start justify-start gap-2 overflow-hidden md:w-[200px] md:gap-3 lg:w-[250px]">
          <div className="w-full">
            <p className="mb-0.5 text-xs font-thin text-sub-cyan md:mb-1 md:text-sm lg:text-base">
              Category
            </p>
            <p className="truncate text-sm font-medium text-text-primary md:text-base lg:text-lg">
              {review.category}
            </p>
          </div>
          <div className="w-full">
            <p className="mb-0.5 text-xs font-thin text-sub-cyan md:mb-1 md:text-sm lg:text-base">
              Game
            </p>
            <p className="truncate text-sm font-medium text-text-primary md:text-base lg:text-lg">
              {review.gameName}
            </p>
          </div>
          <div className="flex w-full gap-3 md:gap-6">
            <div className="flex-1">
              <p className="mb-0.5 text-xs font-thin text-sub-cyan md:mb-1 md:text-sm lg:text-base">
                Score
              </p>
              <p className="truncate text-sm font-medium text-text-primary md:text-base lg:text-lg">
                {review.rating}
              </p>
            </div>
            <div className="flex-1">
              <p className="mb-0.5 text-xs font-thin text-sub-cyan md:mb-1 md:text-sm lg:text-base">
                Feedback
              </p>
              <div className="flex items-center">
                {review.rating >= 3 ? (
                  <ThumbsUp
                    size={20}
                    className="text-text-primary md:size-5 lg:size-6"
                  />
                ) : (
                  <ThumbsDown
                    size={20}
                    className="text-text-primary md:size-5 lg:size-6"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="mb-1 text-xs font-thin text-sub-cyan md:mb-2 md:text-sm lg:text-base">
            Review
          </p>
          <p className="line-clamp-5 text-sm leading-relaxed font-normal text-text-primary md:line-clamp-6 md:text-base">
            {review.content}
          </p>
        </div>
      </div>
    </Link>
  )
}
