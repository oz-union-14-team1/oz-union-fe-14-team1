'use client'

import useCarousel from '@/hooks/useCarousel'
import { Game } from '@/types/api-response/game-response'
import { cn } from '@/utils'

import CarouselNav from '../carousel-nav/CarouselNav'
import GameCard from '../game-card/GameCard'
import SectionTitle from '../section-title/SectionTitle'

type CarouselSectionProps = {
  title: string
  href?: string
  showArrow?: boolean
  games: Game[]
  className?: string
}

export function CarouselSection({
  title,
  href,
  showArrow = true,
  games,
  className,
}: CarouselSectionProps) {
  const { ref, hasPrev, hasNext, scrollPrev, scrollNext, updateNavState } =
    useCarousel()

  return (
    <section className={className}>
      <div className="mb-2 flex items-center justify-between px-2 md:mb-5">
        <SectionTitle title={title} href={href} showArrow={showArrow} />
        <CarouselNav
          onPrev={scrollPrev}
          onNext={scrollNext}
          hasPrev={hasPrev}
          hasNext={hasNext}
        />
      </div>
      <div
        ref={ref}
        onScroll={updateNavState}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
      >
        {games.map((game) => (
          <div
            key={game.id}
            className={cn(
              'shrink-0 snap-start',
              'basis-[calc(33.333%-11px)]',
              'md:basis-[calc(25%-12px)]',
              'lg:basis-[calc(16.666%-14px)]'
            )}
          >
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              image={game.image}
              variant="default"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
