import { GameReview } from '@/components/layout/review/GameReview'

export default function GameReviewPage() {
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

  return (
    <div>
      <GameReview gameDetail={data} />
    </div>
  )
}
