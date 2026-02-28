'use client'

import { X } from 'lucide-react'

import useDeleteProfileImage from '@/api/queries/useDeleteProfileImage'
import { cn } from '@/utils'

export default function DeleteProfileImageUi() {
  const { mutate: deleteImage } = useDeleteProfileImage()

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()

    // 삭제 확인
    const confirmed = window.confirm('프로필 이미지를 삭제하시겠습니까?')

    if (!confirmed) {
      return
    }

    deleteImage()
  }

  return (
    <button
      title="삭제 버튼"
      className={cn(
        'absolute top-2.5 left-2.5 z-6 flex h-35.75 w-35.75 items-center justify-center rounded-full',
        'border border-white/10 bg-white/5 backdrop-blur-md',
        'opacity-0 transition-all duration-300',
        'group-hover:scale-105 group-hover:border-white/20 group-hover:bg-white/10 group-hover:opacity-100',
        'group-hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]'
      )}
      onClick={handleDelete}
    >
      <X className="size-8 text-text-light transition-colors duration-300 group-hover:text-text-light" />
    </button>
  )
}
