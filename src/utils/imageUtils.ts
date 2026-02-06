/**
 * 이미지 관련 유틸리티 함수
 */

/**
 * 이미지 URL 처리
 * - Base64: 그대로 반환 (Mock 모드)
 * - 절대 URL: http → https 변환 (Mixed Content 방지)
 * - 상대 경로: Next.js API Route로 변환 (백엔드 프록시)
 */
export const getFullImageUrl = (url: string): string => {
  if (!url || url === 'undefined' || url === 'null') {
    return ''
  }

  // Base64 데이터 URI는 그대로 반환 (Mock 모드)
  if (url.startsWith('data:')) {
    return url
  }

  // http:// → https:// 변환 (Mixed Content 방지)
  if (url.startsWith('http://')) {
    const httpsUrl = url.replace('http://', 'https://')
    if (process.env.NODE_ENV === 'development') {
      console.log('🔒 이미지 URL을 HTTPS로 변환:', {
        original: url,
        converted: httpsUrl,
      })
    }
    return httpsUrl
  }

  // 이미 https면 그대로 반환
  if (url.startsWith('https://')) {
    return url
  }

  // 상대 경로는 Next.js API Route로 변환
  // /media/... → /api/media/... (백엔드 프록시)
  if (url.startsWith('/media/')) {
    return url.replace('/media/', '/api/media/')
  }

  // 기타 상대 경로는 그대로 반환
  return url
}

/**
 * 이미지 압축
 * @param blob - 원본 이미지 Blob
 * @param quality - 품질 (0.0 ~ 1.0)
 * @param maxSize - 최대 크기 (기본: 800px)
 */
export const compressImage = (
  blob: Blob,
  quality: number = 0.7,
  maxSize: number = 800
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = URL.createObjectURL(blob)

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        URL.revokeObjectURL(img.src)
        reject(new Error('Canvas context를 가져올 수 없습니다.'))
        return
      }

      // 비율 유지하며 크기 조정
      let { width, height } = img

      if (width > height) {
        if (width > maxSize) {
          height = (height * maxSize) / width
          width = maxSize
        }
      } else {
        if (height > maxSize) {
          width = (width * maxSize) / height
          height = maxSize
        }
      }

      canvas.width = width
      canvas.height = height
      ctx.drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (compressedBlob) => {
          URL.revokeObjectURL(img.src)
          if (compressedBlob) {
            resolve(compressedBlob)
          } else {
            reject(new Error('이미지 압축에 실패했습니다.'))
          }
        },
        'image/jpeg',
        quality
      )
    }

    img.onerror = () => {
      URL.revokeObjectURL(img.src)
      reject(new Error('이미지 로드에 실패했습니다.'))
    }
  })
}

/**
 * 이미지 크기가 제한을 초과하는지 확인하고 필요시 압축
 */
export const compressIfNeeded = async (
  blob: Blob,
  maxSizeBytes: number = 2 * 1024 * 1024 // 2MB
): Promise<Blob> => {
  if (blob.size <= maxSizeBytes) {
    return blob
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(
      `⚠️ 이미지 크기: ${(blob.size / 1024).toFixed(2)}KB - 압축 시작...`
    )
  }

  const compressed = await compressImage(blob, 0.7, 800)

  if (process.env.NODE_ENV === 'development') {
    console.log(`✅ 압축 완료: ${(compressed.size / 1024).toFixed(2)}KB`)
  }

  return compressed
}
