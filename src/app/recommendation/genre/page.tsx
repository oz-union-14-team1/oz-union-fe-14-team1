'use client'

import { useAllGenres } from '@/api/queries/usePreference'
import { GenreSelector, OnboardingHeader } from '@/components'
import { filterAndMapGenres } from '@/utils/genreHelper'

export default function GenrePage() {
  const { data: allGenres = [] } = useAllGenres()
  const genres = filterAndMapGenres(allGenres)

  return (
    <>
      <OnboardingHeader
        emoji="👾"
        currentStep={2}
        title={
          <>
            이 플레이 타입에
            <span className="font-bold text-text-light">어울리는 장르</span>를
            골라보세요
          </>
        }
        mobileTitle={
          <>
            <span className="font-bold text-white">어떤장르</span>가 좋으세요?
          </>
        }
        description={
          <>
            당신의
            <span className="font-bold text-white">
              플레이 스타일과 잘 어울리는 장르
            </span>
            입니다.
          </>
        }
        mobileDescription="취향에 어울리는 장르를 선택해보세요."
      />

      <div className="flex flex-1 items-center justify-center py-6 md:py-8 lg:py-10">
        <GenreSelector genres={genres} />
      </div>
    </>
  )
}
