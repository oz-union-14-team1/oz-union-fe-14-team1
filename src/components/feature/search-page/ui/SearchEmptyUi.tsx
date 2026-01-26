function SearchEmptyUi() {
  return (
    <div className="flex min-h-100 items-center justify-center">
      <div className="space-y-4 text-center">
        <SearchEmptyIcon />
        <div className="space-y-2">
          <p className="text-xl font-semibold text-text-primary">
            검색 결과가 없습니다
          </p>
          <p className="text-sm text-text-secondary">
            다른 검색어나 필터를 시도해보세요
          </p>
        </div>
      </div>
    </div>
  )
}

export default SearchEmptyUi

function SearchEmptyIcon() {
  return (
    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-surface-muted">
      <svg
        className="h-12 w-12 text-text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}
