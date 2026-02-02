import { IMAGE_CROP_CONFIG } from '@/constants'

/**
 * 이미지 로딩을 위한 Promise 래퍼
 */
export function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.addEventListener('error', (error) => {
      reject(error)
    })
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = url
  })
}

/**
 * Canvas를 사용하여 이미지를 크롭하고 Blob으로 반환
 */
export async function getCroppedImg(
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number },
  rotation = 0
): Promise<Blob> {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('Canvas context를 생성할 수 없습니다.')
  }

  const maxSize = Math.max(image.width, image.height)
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

  // 캔버스 크기 설정
  canvas.width = safeArea
  canvas.height = safeArea

  // 캔버스 중앙으로 이동
  ctx.translate(safeArea / 2, safeArea / 2)
  ctx.rotate((rotation * Math.PI) / 180)
  ctx.translate(-safeArea / 2, -safeArea / 2)

  // 이미지 그리기
  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  )

  const data = ctx.getImageData(0, 0, safeArea, safeArea)

  // 최종 출력 크기로 새 캔버스 생성
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height

  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  )

  // Blob으로 변환
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Canvas를 Blob으로 변환할 수 없습니다.'))
        return
      }
      resolve(blob)
    }, 'image/jpeg')
  })
}

/**
 * Blob을 File 객체로 변환
 */
export function blobToFile(blob: Blob, fileName: string): File {
  return new File([blob], fileName, { type: blob.type })
}

/**
 * 파일 크기 검증
 */
export function validateFileSize(file: File, maxSizeBytes: number): boolean {
  return file.size <= maxSizeBytes
}

/**
 * 파일 형식 검증
 */
export function validateFileType(
  file: File,
  acceptedTypes: readonly string[]
): boolean {
  return acceptedTypes.includes(file.type)
}

/**
 * 이미지를 리사이즈하여 최적화된 크기로 반환
 */
export async function resizeImage(
  imageSrc: string,
  maxWidth: number = IMAGE_CROP_CONFIG.OUTPUT_WIDTH,
  maxHeight: number = IMAGE_CROP_CONFIG.OUTPUT_HEIGHT
): Promise<Blob> {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('Canvas context를 생성할 수 없습니다.')
  }

  let { width, height } = image

  // 비율 유지하며 리사이즈
  if (width > height) {
    if (width > maxWidth) {
      height = (height * maxWidth) / width
      width = maxWidth
    }
  } else {
    if (height > maxHeight) {
      width = (width * maxHeight) / height
      height = maxHeight
    }
  }

  canvas.width = width
  canvas.height = height

  ctx.drawImage(image, 0, 0, width, height)

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Canvas를 Blob으로 변환할 수 없습니다.'))
        return
      }
      resolve(blob)
    }, 'image/jpeg')
  })
}
