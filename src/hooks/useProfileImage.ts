'use client'

import useGetProfileImage from '@/api/queries/useGetProfileImage'

/**
 * 서버에서 프로필 이미지 URL을 불러오는 커스텀 훅
 */
export const useProfileImage = () => {
  const { data, isSuccess } = useGetProfileImage()

  // 데이터가 성공적으로 로드되었고, 실제 값이 있을 때만 반환
  return (isSuccess && data?.profileImgUrl) || ''
}
