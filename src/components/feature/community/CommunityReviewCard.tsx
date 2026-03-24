import { HeartIcon } from 'lucide-react'

import { CommunityReview } from '@/types/api-response/review-response'
import { formatDate } from '@/utils'

import { Avatar } from '../review'
import { Card } from '../review/ReviewCard'
import { Star } from '../review/Star'

type CommunityReviewCardProp = {
  review: CommunityReview
}

export default function CommunityReviewCard({
  review,
}: CommunityReviewCardProp) {
  const { author, gameName, rating, content, likeCount, createdAt } = review

  return (
    <Card
      className="flex gap-2 md:gap-3"
      style={{ boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)' }}
    >
      <Card.Header>
        <Avatar avatar={author} />
        <span>{formatDate(createdAt)}</span>
      </Card.Header>
      <Card.Content className="mb-1 flex flex-col gap-1 md:mb-2 md:gap-2">
        <p className="mb-1 text-sm font-medium text-text-light md:mb-0 md:text-base">
          {gameName}
        </p>
        <Star size={15} value={rating} readonly className="mb-1" />
        <p className="text-base font-normal text-text-light/80">{content}</p>
      </Card.Content>
      <Card.Footer>
        <button
          type="button"
          aria-label={`좋아요 ${likeCount}개`}
          className="flex items-center gap-1 rounded-xl bg-surface-muted px-3 py-1.5 text-text-light/80"
        >
          <HeartIcon size={15} /> {likeCount}
        </button>
      </Card.Footer>
    </Card>
  )
}
