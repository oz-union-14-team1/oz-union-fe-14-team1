'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Image as ImageIcon, Minus, Plus, X, ZoomIn } from 'lucide-react'
import { useCallback, useState } from 'react'
import Cropper from 'react-easy-crop'

import { IMAGE_CROP_CONFIG, PROFILE_TEXT } from '@/constants'
import { useToast } from '@/hooks'
import { cn, getCroppedImg } from '@/utils'

type Point = { x: number; y: number }
type Area = { x: number; y: number; width: number; height: number }

type ProfileImageCropDialogUiProps = {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  onSave: (croppedImageBlob: Blob) => void
}

export default function ProfileImageCropDialogUi({
  isOpen,
  onClose,
  imageUrl,
  onSave,
}: ProfileImageCropDialogUiProps) {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState<number>(IMAGE_CROP_CONFIG.ZOOM_MIN)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const { triggerToast } = useToast()

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels)
    },
    []
  )

  const handleSave = async () => {
    if (!croppedAreaPixels) {
      return
    }

    try {
      setIsProcessing(true)
      const croppedImage = await getCroppedImg(imageUrl, croppedAreaPixels)
      onSave(croppedImage)
      onClose()
    } catch (error) {
      console.error('이미지 크롭 실패:', error)
      triggerToast('error', '이미지 처리 중 오류가 발생했습니다.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleCancel = () => {
    setCrop({ x: 0, y: 0 })
    setZoom(IMAGE_CROP_CONFIG.ZOOM_MIN)
    setCroppedAreaPixels(null)
    onClose()
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleCancel}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2',
            'overflow-hidden rounded-xl border border-main-purple/20 shadow-xl sm:rounded-2xl',
            'from-bg-base via-bg-base to-bg-light bg-linear-to-br',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
            'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
            'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-main-purple/8 via-transparent to-main-fuchsia/8" />

          <div className="relative p-4 sm:p-6 md:p-8">
            {/* 헤더 */}
            <div className="mb-4 flex items-center justify-between sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className={cn(
                    'flex size-8 items-center justify-center rounded-full sm:size-9',
                    'bg-linear-to-br from-main-purple to-main-fuchsia',
                    'shadow-md shadow-main-purple/20'
                  )}
                >
                  <ImageIcon className="size-3.5 text-white sm:size-4" />
                </div>
                <Dialog.Title className="text-base font-semibold text-text-light sm:text-lg md:text-xl">
                  {PROFILE_TEXT.CROP_DIALOG_TITLE}
                </Dialog.Title>
              </div>
              <Dialog.Close
                className={cn(
                  'group rounded-full p-1.5 transition-all duration-200 sm:p-2.5',
                  'hover:bg-bg-base hover:rotate-90',
                  'focus:ring-2 focus:ring-main-purple focus:outline-none'
                )}
                disabled={isProcessing}
              >
                <X className="text-text-medium size-4 transition-colors group-hover:text-text-light sm:size-5" />
              </Dialog.Close>
            </div>

            {/* 크롭 영역 */}
            <div
              className={cn(
                'relative mb-6 h-[50vh] w-full overflow-hidden sm:mb-8 sm:h-[55vh] md:h-[60vh]',
                'max-h-100 sm:max-h-112.5 md:max-h-125',
                'border-border-base/30 rounded-lg border bg-black shadow-lg sm:rounded-xl',
                'ring-1 ring-main-purple/5'
              )}
            >
              <Cropper
                image={imageUrl}
                crop={crop}
                zoom={zoom}
                aspect={IMAGE_CROP_CONFIG.ASPECT_RATIO}
                cropShape={IMAGE_CROP_CONFIG.CROP_SHAPE}
                showGrid={false}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />

              {/* 줌 인디케이터 */}
              <div
                className={cn(
                  'absolute top-2 right-2 z-10 sm:top-4 sm:right-4',
                  'flex items-center gap-1.5 rounded-full sm:gap-2',
                  'border border-white/5 bg-black/40 px-2 py-1 backdrop-blur-md sm:px-3 sm:py-1.5'
                )}
              >
                <ZoomIn className="size-3 text-white/70 sm:size-3.5" />
                <span className="text-[10px] font-medium text-white/90 sm:text-xs">
                  {zoom.toFixed(1)}x
                </span>
              </div>
            </div>

            {/* 줌 컨트롤 */}
            <div className="mb-6 sm:mb-8">
              <div className="mb-2 flex items-center justify-between sm:mb-3">
                <label
                  htmlFor="zoom-slider"
                  className="flex items-center gap-1.5 text-xs font-medium text-text-light sm:gap-2 sm:text-sm"
                >
                  <ZoomIn className="size-3 sm:size-3.5" />
                  {PROFILE_TEXT.ZOOM_LABEL}
                </label>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => {
                      setZoom(Math.max(IMAGE_CROP_CONFIG.ZOOM_MIN, zoom - 0.1))
                    }}
                    disabled={
                      zoom <= IMAGE_CROP_CONFIG.ZOOM_MIN || isProcessing
                    }
                    className={cn(
                      'border-border-base/40 bg-bg-base rounded-full border p-0.5 transition-all duration-200 sm:p-1',
                      'hover:border-main-purple/50 hover:bg-main-purple/5',
                      'disabled:cursor-not-allowed disabled:opacity-30'
                    )}
                    aria-label="축소"
                  >
                    <Minus className="size-2.5 sm:size-3" />
                  </button>
                  <button
                    onClick={() => {
                      setZoom(Math.min(IMAGE_CROP_CONFIG.ZOOM_MAX, zoom + 0.1))
                    }}
                    disabled={
                      zoom >= IMAGE_CROP_CONFIG.ZOOM_MAX || isProcessing
                    }
                    className={cn(
                      'border-border-base/40 bg-bg-base rounded-full border p-0.5 transition-all duration-200 sm:p-1',
                      'hover:border-main-purple/50 hover:bg-main-purple/5',
                      'disabled:cursor-not-allowed disabled:opacity-30'
                    )}
                    aria-label="확대"
                  >
                    <Plus className="size-2.5 sm:size-3" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <input
                  id="zoom-slider"
                  type="range"
                  min={IMAGE_CROP_CONFIG.ZOOM_MIN}
                  max={IMAGE_CROP_CONFIG.ZOOM_MAX}
                  step={IMAGE_CROP_CONFIG.ZOOM_STEP}
                  value={zoom}
                  onChange={(e) => {
                    setZoom(Number(e.target.value))
                  }}
                  className={cn(
                    'h-2 w-full cursor-pointer appearance-none rounded-full',
                    'from-bg-base via-bg-light to-bg-base bg-linear-to-r',
                    'transition-all duration-200',
                    '[&::-webkit-slider-thumb]:size-4',
                    '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full',
                    '[&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-main-purple/30',
                    '[&::-webkit-slider-thumb]:bg-linear-to-br [&::-webkit-slider-thumb]:from-main-purple [&::-webkit-slider-thumb]:to-main-fuchsia',
                    '[&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-main-purple/30',
                    '[&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-200',
                    '[&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:hover:shadow-lg',
                    '[&::-webkit-slider-thumb]:cursor-pointer'
                  )}
                  disabled={isProcessing}
                />
              </div>
              <div className="mt-1.5 flex justify-between px-0.5 text-[10px] font-medium text-text-dark sm:mt-2 sm:px-1 sm:text-xs">
                <span>{IMAGE_CROP_CONFIG.ZOOM_MIN}x</span>
                <span>{IMAGE_CROP_CONFIG.ZOOM_MAX}x</span>
              </div>
            </div>

            {/* 버튼 */}
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-3">
              <button
                onClick={handleCancel}
                disabled={isProcessing}
                className={cn(
                  'border-border-base/50 bg-bg-base rounded-lg border px-6 py-2 sm:rounded-xl sm:px-8 sm:py-2.5',
                  'text-text-medium text-xs font-medium sm:text-sm',
                  'transition-all duration-200',
                  'hover:border-border-base hover:bg-bg-light hover:scale-[1.02] hover:text-text-light',
                  'active:scale-95',
                  'focus:ring-1 focus:ring-main-purple/50 focus:outline-none',
                  'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100'
                )}
              >
                {PROFILE_TEXT.CROP_CANCEL}
              </button>
              <button
                onClick={handleSave}
                disabled={isProcessing}
                className={cn(
                  'group relative overflow-hidden rounded-lg bg-linear-to-r from-main-purple to-main-fuchsia px-6 py-2 sm:rounded-xl sm:px-8 sm:py-2.5',
                  'text-xs font-medium text-white sm:text-sm',
                  'shadow-md shadow-main-purple/20',
                  'transition-all duration-200',
                  'hover:scale-[1.02] hover:shadow-lg hover:shadow-main-purple/30',
                  'active:scale-95',
                  'focus:ring-1 focus:ring-main-purple/50 focus:outline-none',
                  'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100'
                )}
              >
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">
                  {isProcessing ? '처리 중...' : PROFILE_TEXT.CROP_SAVE}
                </span>
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
