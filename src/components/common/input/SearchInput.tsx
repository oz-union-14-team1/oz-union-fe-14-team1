import { Search } from 'lucide-react'
import BaseInput, { BaseInputProps } from './BaseInput'

type SearchInputProps = BaseInputProps & {
  onSearch?: () => void
}

/**
 * 검색 인풋
 * @param onSearch - 클릭 했을 때의 이벤트 처리
 */
export function SearchInput({ onSearch, ...props }: SearchInputProps) {
  return (
    <BaseInput
      size="search"
      color="darkGray"
      searchIcon={<Search size={24} color="var(--color-text-light)" />}
      onSearchIconClick={onSearch}
      className="pr-12"
      {...props}
    />
  )
}
