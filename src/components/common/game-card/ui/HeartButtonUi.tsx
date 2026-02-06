'use client'

import { Heart } from 'lucide-react'

import { useGetWishlist } from '@/api/queries/useGetWishlist'
import {
  useDeleteWishlist,
  usePostWishlist,
} from '@/api/queries/useWishlistMutations'
import { useToast } from '@/hooks'
import { GameId } from '@/types'
import { cn } from '@/utils'

type HeartButtonUiProps = {
  gameId: GameId
}

export function HeartButtonUi({ gameId }: HeartButtonUiProps) {
  const { data: wishlistGames = [] } = useGetWishlist()
  const { mutate: addWishlist } = usePostWishlist()
  const { mutate: removeWishlist } = useDeleteWishlist()
  const { triggerToast } = useToast()

  const gameIdNum = typeof gameId === 'string' ? parseInt(gameId, 10) : gameId

  // 위시리스트 항목 찾기 (game 필드로 비교)
  const wishlistItem = wishlistGames.find((item) => item.game === gameIdNum)
  const wishlisted = !!wishlistItem

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (wishlisted && wishlistItem) {
      // 위시리스트 항목 ID로 삭제
      removeWishlist(wishlistItem.id, {
        onSuccess: () => {
          triggerToast('success', '위시리스트에서 제거되었습니다.')
        },
        onError: () => {
          triggerToast('error', '위시리스트 제거에 실패했습니다.')
        },
      })
    } else {
      addWishlist(
        { game: gameIdNum },
        {
          onSuccess: () => {
            triggerToast('success', '위시리스트에 추가되었습니다.')
          },
          onError: () => {
            triggerToast('error', '위시리스트 추가에 실패했습니다.')
          },
        }
      )
    }
  }

  return (
    <button
      type="button"
      aria-label="찜하기"
      onClick={handleWishlistClick}
      className={cn(
        'absolute top-5 right-5 z-10 size-9 cursor-pointer overflow-hidden rounded-full border border-white/20 bg-black/60 backdrop-blur-md transition-all duration-300',
        'flex flex-col items-center justify-center',
        'hover:scale-110 hover:border-white/40 hover:bg-black/80 hover:shadow-[0_4px_12px_rgba(168,85,247,0.4)]',
        wishlisted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      )}
    >
      <Heart
        className={cn(
          'size-5 transition-all duration-300',
          wishlisted
            ? 'fill-red-500 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]'
            : 'text-white'
        )}
      />
    </button>
  )
}
