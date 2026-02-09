type InfoBoxProps = {
  title: string
  items: string[]
  footerText?: string
}

/**
 * 정보 박스 컴포넌트
 * @param title - 박스 제목
 * @param items - 항목 리스트
 * @param footerText - 하단 텍스트(선택 사항)
 */
export default function InfoBox({ title, items, footerText }: InfoBoxProps) {
  return (
    <div className="mb-8 w-full text-sm md:text-base">
      <span className="mb-3 inline-block rounded-lg bg-text-dark px-5 py-2 font-medium">
        {title}
      </span>
      <div className="rounded-lg border border-text-light/10 bg-text-dark px-5 py-5">
        <ul className="list-disc space-y-2 pl-4">
          {items.map((item, i) => (
            <li key={i}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {footerText && (
          <>
            <div className="my-4 h-px bg-text-light/10" />
            <p>{footerText}</p>
          </>
        )}
      </div>
    </div>
  )
}
