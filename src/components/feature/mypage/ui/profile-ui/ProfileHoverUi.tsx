import { Pencil, X } from 'lucide-react'

import { cn } from '@/utils'

function EditProfileImageUi() {
  return (
    <div
      className={cn(
        'absolute top-2.5 left-2.5 z-6 flex h-35.75 w-35.75 items-center justify-center rounded-full',
        'border border-white/10 bg-white/5 backdrop-blur-md',
        'opacity-0 transition-all duration-300',
        'group-hover:scale-105 group-hover:border-white/20 group-hover:bg-white/10 group-hover:opacity-100',
        'group-hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]'
      )}
    >
      <Pencil className="size-8 text-text-light transition-colors duration-300 group-hover:text-main-purple" />
    </div>
  )
}

function DeleteProfileImageUi() {
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
      onClick={(e) => {
        e.stopPropagation()
        // TODO: 이미지 삭제 로직 추가
      }}
    >
      <X className="size-8 text-text-light transition-colors duration-300 group-hover:text-red-500" />
    </button>
  )
}

export { DeleteProfileImageUi, EditProfileImageUi }
