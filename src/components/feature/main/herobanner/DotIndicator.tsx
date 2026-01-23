type DotIndicatorProps = {
  total: number
  currentIndex: number
  onDotClick: (index: number) => void
}

const dotBase = 'h-2 rounded-full transition-all'
const dotActive = 'w-6 bg-gradient-sub opacity-80'
const dotInactive = 'w-2 bg-white/30 hover:bg-white/70'

export default function DotIndicator({
  total,
  currentIndex,
  onDotClick,
}: DotIndicatorProps) {
  const getDotStyle = (index: number) =>
    index === currentIndex ? dotActive : dotInactive

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`${dotBase} ${getDotStyle(index)}`}
        />
      ))}
    </div>
  )
}
