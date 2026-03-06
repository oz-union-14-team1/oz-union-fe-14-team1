import ReviewPageClient from '@/components/feature/review/ReviewPageClient'

type ReviewPageProps = {
  params: Promise<{ gameId: string }>
}

export default function ReviewPage({ params }: ReviewPageProps) {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 px-4 py-10 lg:flex-row lg:items-start">
      <ReviewPageClient params={params} />
    </div>
  )
}
