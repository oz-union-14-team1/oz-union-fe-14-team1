import { GenreSelector, OnboardingHeader } from '@/components'
import { MOCK_GENRES } from '@/mocks/mockGenres'

async function getGenres() {
  return MOCK_GENRES
}

export default async function GenrePage() {
  const genres = await getGenres()

  return (
    <>
      <OnboardingHeader
        emoji="👾"
        currentStep={2}
        title={
          <>
            이 플레이 타입에 <span className="font-bold">어울리는 장르</span>를
            골라보세요
          </>
        }
        description={<>선택한 플레이 스타일을 바탕으로 추천된 장르예요</>}
      />
      <GenreSelector genres={genres} />
    </>
  )
}
