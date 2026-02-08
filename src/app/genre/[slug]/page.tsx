import { notFound } from 'next/navigation'

import { GENRE_ASSETS } from '@/assets/genre-assets/genreData'
import { GENRE_NAMES_KR } from '@/assets/genre-assets/genreName'
import GenreHeader from '@/components/feature/genre/GenreHeader'
import GenreList from '@/components/feature/genre/GenreList'
import { GENRE_META } from '@/constants/genreMeta'
import { GenreSlug } from '@/types'

export default async function GenreDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const genreSlug = slug as GenreSlug

  if (!(genreSlug in GENRE_ASSETS)) {
    notFound()
  }

  const meta = GENRE_META[genreSlug]
  if (!meta) {
    notFound()
  }

  const genreName = GENRE_NAMES_KR[genreSlug]
  const backgroundImage = GENRE_ASSETS[genreSlug].horizontal

  return (
    <main>
      <GenreHeader
        name={genreName}
        description={meta.description}
        backgroundImgUrl={backgroundImage}
        bgPosition={meta.bgPosition}
      />
      <div className="mx-auto my-5 max-w-345 md:my-16">
        <GenreList genreSlug={genreSlug} genreName={genreName} />
      </div>
    </main>
  )
}
