import AiSummary from '@/components/feature/review/Aisummary'
import { ImageCard } from '@/components/feature/review/ImageCard'
import { GameReview } from '@/components/layout/review/GameReview'

const response = {
  imgUrl: 'https://my-bucket.s3.amazonaws.com/...',
  key: 'uploads/images/...',
}
const data = {
  gameId: 1,
  gameName: '테스트',
  imgUrl: '',
  intro: '젤다의전설은 유명한 게임입니다',
  platformName: '닌텐도',
  platformUrl: '',
  release: '2024',
  playTime: '200시간',
  developer: '닌텐도',
  publisher: '퍼블리셔',
  score: 0,
}
export default function ReviewPage() {
  return (
    <div className="mx-auto flex w-full max-w-300 gap-10 px-4 py-10">
      <div className="flex flex-1 flex-col gap-10">
        <ImageCard imgUrl={response.imgUrl} name="젤다" id={response.key} />
        <AiSummary className="flex w-full flex-col gap-4 rounded-xl border border-white/10 bg-surface-elevated p-6 shadow-sm" />
      </div>
      <div className="w-85 shrink-0">
        <GameReview gameDetail={data} />
      </div>
    </div>
  )
}
