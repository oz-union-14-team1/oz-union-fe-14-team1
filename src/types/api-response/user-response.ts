// [GET] /api/v1/user/me 내 정보 조회
export type GetUserMe = {
  id: number
  email: string
  nickname: string
  name: string
  gender: 'M' | 'F'
  is_active: boolean
  created_at: string
  updated_at: string
}

// [GET] /api/v1/user/me/profile-image 회원 프로필 URL
export type GetUserProfileImage = {
  image_url: string
}

// [GET] /api/v1/user/me/profile-image 조회 응답 (Alias)
export type GetProfileImage = GetUserProfileImage

// [POST] /api/v1/user/me/profile-image 업로드 응답
export type PostProfileImage = GetUserProfileImage
