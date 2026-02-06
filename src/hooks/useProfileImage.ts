import useGetProfileImage from '@/api/queries/useGetProfileImage'

/**
 * 서버에서 프로필 이미지 URL을 불러오는 커스텀 훅
 */
export const useProfileImage = () => {
  const { data } = useGetProfileImage()

  return data?.image_url || ''
}
