'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Pencil, X } from 'lucide-react'
import { ChangeEvent, useRef, useState } from 'react'

import { postProfileApi } from '@/api/fetchers/profileFetchers'
import { IMAGE_ERROR_MESSAGES, IMAGE_UPLOAD_CONFIG } from '@/constants'
import useToast from '@/hooks/useToast'
import { cn, validateFileSize, validateFileType } from '@/utils'

import ProfileImageCropDialog from './ProfileImageCropDialogUi'

function EditProfileImageUi() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { triggerToast } = useToast()
  const queryClient = useQueryClient()

  const { mutate: uploadImage } = useMutation({
    mutationFn: postProfileApi,
    onSuccess: () => {
      triggerToast('success', IMAGE_ERROR_MESSAGES.UPLOAD_SUCCESS)
      // 프로필 이미지 캐시 무효화하여 새 이미지 불러오기
      queryClient.invalidateQueries({ queryKey: ['profileImage'] })
    },
    onError: (error) => {
      console.error('이미지 업로드 실패:', error)
      triggerToast('error', IMAGE_ERROR_MESSAGES.UPLOAD_FAILED)
    },
  })

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      return
    }

    // 파일 형식 검증
    if (!validateFileType(file, IMAGE_UPLOAD_CONFIG.ACCEPTED_FORMATS)) {
      triggerToast('error', IMAGE_ERROR_MESSAGES.INVALID_FORMAT)
      return
    }

    // 파일 크기 검증
    if (!validateFileSize(file, IMAGE_UPLOAD_CONFIG.MAX_FILE_SIZE_BYTES)) {
      triggerToast('error', IMAGE_ERROR_MESSAGES.FILE_TOO_LARGE)
      return
    }

    // 이미지 미리보기 생성
    const reader = new FileReader()
    reader.onload = () => {
      setSelectedImage(reader.result as string)
      setIsDialogOpen(true)
    }
    reader.onerror = () => {
      triggerToast('error', IMAGE_ERROR_MESSAGES.LOAD_FAILED)
    }
    reader.readAsDataURL(file)

    // input 초기화 (같은 파일 다시 선택 가능하도록)
    e.target.value = ''
  }

  const handleSave = async (croppedImageBlob: Blob) => {
    // FormData 생성하여 이미지 업로드
    const formData = new FormData()
    formData.append('profile_image', croppedImageBlob, 'profile.jpg')

    uploadImage(formData)
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept={IMAGE_UPLOAD_CONFIG.ACCEPTED_EXTENSIONS}
        className="hidden"
        onChange={handleFileChange}
        aria-label="프로필 이미지 파일 선택"
      />
      <div
        onClick={handleClick}
        className={cn(
          'absolute top-2.5 left-2.5 z-6 flex h-35.75 w-35.75 cursor-pointer items-center justify-center rounded-full',
          'border border-white/10 bg-white/5 backdrop-blur-md',
          'opacity-0 transition-all duration-300',
          'group-hover:scale-105 group-hover:border-white/20 group-hover:bg-white/10 group-hover:opacity-100',
          'group-hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]'
        )}
      >
        <Pencil className="size-7 text-text-light transition-colors duration-300 group-hover:text-text-light" />
      </div>

      {selectedImage && (
        <ProfileImageCropDialog
          isOpen={isDialogOpen}
          onClose={() => {
            setIsDialogOpen(false)
          }}
          imageUrl={selectedImage}
          onSave={handleSave}
        />
      )}
    </>
  )
}

function DeleteProfileImageUi() {
  const { triggerToast } = useToast()
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()

    // 삭제 확인
    const confirmed = window.confirm('프로필 이미지를 삭제하시겠습니까?')

    if (!confirmed) {
      return
    }

    try {
      // TODO: 서버에 이미지 삭제 요청

      // TODO: API 호출
      // await api.delete('/profile/image')

      triggerToast('success', IMAGE_ERROR_MESSAGES.DELETE_SUCCESS)
    } catch (error) {
      console.error('이미지 삭제 실패:', error)
      triggerToast('error', IMAGE_ERROR_MESSAGES.DELETE_FAILED)
    }
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

export { DeleteProfileImageUi, EditProfileImageUi }
