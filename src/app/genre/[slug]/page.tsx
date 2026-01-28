import { notFound } from 'next/navigation'

import { GENRE_ASSETS } from '@/assets'
import GenreHeader from '@/components/feature/genre/GenreHeader'
import { GENRE_META } from '@/constants/genreMeta'
import { GenreSlug } from '@/types'

/**
 * 임시 장르 데이터 (API 연동 전까지 사용)
 */
const GENRE_DATA: Record<GenreSlug, { id: number; name: string }> = {
  adventure: { id: 1, name: '어드벤처' },
  action: { id: 2, name: '액션' },
  shooting: { id: 3, name: '슈팅' },
  rpg: { id: 4, name: 'RPG' },
  simulation: { id: 5, name: '시뮬레이션' },
  puzzle: { id: 6, name: '퍼즐' },
  roguelike: { id: 7, name: '로그라이크' },
  survival: { id: 8, name: '서바이벌' },
  arcade: { id: 9, name: '아케이드' },
  racing: { id: 10, name: '레이싱' },
  horror: { id: 11, name: '호러' },
  sports: { id: 12, name: '스포츠' },
}

export default async function GenreDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const genreSlug = slug as GenreSlug

  if (!GENRE_DATA[genreSlug]) {
    notFound()
  }

  /**
   * TODO: API 연동 시 교체
   * const genre = await getGenreBySlug(genreSlug)
   */
  const genre = GENRE_DATA[genreSlug]
  const meta = GENRE_META[genreSlug]
  const backgroundImage = GENRE_ASSETS[genreSlug].horizontal

  return (
    <main>
      <GenreHeader
        name={genre.name}
        description={meta.description}
        backgroundImgUrl={backgroundImage}
        bgPosition={meta.bgPosition}
      />
    </main>
  )
}
