import {
  GetProfileImage,
  PostProfileImage,
} from '@/types/api-response/user-response'

const STORAGE_KEY = 'mock_profile_image'

const getStoredImage = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem(STORAGE_KEY)
}

const setStoredImage = (imageUrl: string) => {
  if (typeof window === 'undefined') {
    return
  }
  localStorage.setItem(STORAGE_KEY, imageUrl)
}

/**
 * Mock API - 프로필 이미지 조회
 * localStorage에서 저장된 이미지 반환
 */
export const getProfileImageApiMock = async (): Promise<GetProfileImage> => {
  const storedImage = getStoredImage()

  // 네트워크 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    image_url: storedImage || '',
  }
}

/**
 * Mock API - 프로필 이미지 업로드
 * Base64로 변환하여 localStorage에 저장
 */
export const postProfileApiMock = async (
  data: FormData
): Promise<PostProfileImage> => {
  const file = data.get('profile_image') as File

  if (!file) {
    throw new Error('이미지 파일이 없습니다.')
  }

  // 네트워크 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => {
      const base64Url = reader.result as string
      setStoredImage(base64Url)

      resolve({
        image_url: base64Url,
      })
    }
    reader.readAsDataURL(file)
  })
}
