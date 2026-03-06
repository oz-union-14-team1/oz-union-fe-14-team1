type CardOverlayProps = {
  label: string
}

export default function CardOverlay({ label }: CardOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/card:bg-black/50">
      <span className="translate-y-4 text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-white opacity-0 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100">
        {label}
      </span>
    </div>
  )
}
