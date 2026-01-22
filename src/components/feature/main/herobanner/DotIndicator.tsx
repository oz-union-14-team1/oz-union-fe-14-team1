import { Banner } from '@/types/carousel'

type DotIndicatorProps = {
  banners: Banner[]
  currentIndex: number
  onDotClick: (id: number | string) => void
}

const dotBase = 'h-2 rounded-full transition-all'
const dotActive = 'w-6 bg-gradient-sub opacity-80'
const dotInactive = 'w-2 bg-white/30 hover:bg-white/70'

export default function DotIndicator({
  banners,
  currentIndex,
  onDotClick,
}: DotIndicatorProps) {
  const getDotStyle = (index: number) =>
    index === currentIndex ? dotActive : dotInactive

  return (
    <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2">
      {banners.map((banner, index) => (
        <button
          key={banner.id}
          onClick={() => onDotClick(banner.id)}
          className={`${dotBase} ${getDotStyle(index)}`}
        />
      ))}
    </div>
  )
}
