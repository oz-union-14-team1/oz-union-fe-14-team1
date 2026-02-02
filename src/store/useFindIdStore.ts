import { create } from 'zustand'

type FindIdState = {
  identifier: string | null
  setIdentifier: (id: string) => void
  clear: () => void
}

/**
 * Id 찾기 저장 스토어
 * 찾은 아이디 값 저장
 */
export const useFindIdStore = create<FindIdState>((set) => ({
  identifier: null,
  setIdentifier: (id) => set({ identifier: id }),
  clear: () => set({ identifier: null }),
}))
