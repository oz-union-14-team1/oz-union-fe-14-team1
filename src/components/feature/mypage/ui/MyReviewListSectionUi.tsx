import { MyReview } from '@/types/api-response/myreview-response'

import { MyReviewListCardUi } from '..'
import { formatDate } from './MyReviewListWelcomeUi'

export default function MyReviewListSectionUi({
  review,
}: {
  review: MyReview
}) {
  return (
    <div className="group flex items-start justify-start gap-4 md:gap-6 lg:gap-10">
      <div className="-mt-1.5 hidden w-16 shrink-0 md:block md:w-20">
        <p className="text-sm font-medium text-text-secondary transition-all duration-300 group-hover:text-sub-cyan">
          {formatDate(review.created_at)}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-center justify-center">
        <div className="ml-1 size-2 rounded-full bg-text-primary transition-all duration-300 group-hover:scale-150 group-hover:bg-sub-cyan group-hover:shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        <div
          className="ml-1 h-55 border-l border-dashed border-text-secondary transition-colors duration-300 group-hover:border-sub-cyan md:h-65"
          style={{
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.2))',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.2))',
          }}
        />
      </div>
      <MyReviewListCardUi review={review} />
    </div>
  )
}
