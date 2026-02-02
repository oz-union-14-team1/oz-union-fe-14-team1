// 프로필 이미지 크기
export const PROFILE_IMAGE_SIZE = {
  WIDTH: 143,
  HEIGHT: 143,
} as const

// 이미지 업로드 설정
export const IMAGE_UPLOAD_CONFIG = {
  MAX_FILE_SIZE_MB: 5,
  MAX_FILE_SIZE_BYTES: 5 * 1024 * 1024, // 5MB
  ACCEPTED_FORMATS: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  ACCEPTED_EXTENSIONS: '.jpg,.jpeg,.png,.webp',
} as const

// 이미지 크롭 설정
export const IMAGE_CROP_CONFIG = {
  ASPECT_RATIO: 1, // 1:1 정사각형
  CROP_SHAPE: 'round' as const, // 원형 크롭
  ZOOM_MIN: 1,
  ZOOM_MAX: 3,
  ZOOM_STEP: 0.1,
  OUTPUT_WIDTH: 400,
  OUTPUT_HEIGHT: 400,
} as const

// 임시 장르 데이터 (추후 API로 대체 예정)
export const MOCK_GENRES = [
  'action',
  'rpg',
  'adventure',
  'shooter',
  'puzzle',
  'racing',
  'platform',
  'sports',
] as const

// 프로필 텍스트
export const PROFILE_TEXT = {
  IMAGE_ALT: 'profile',
  JOYSTICK_ALT: 'joystick',
  CROP_DIALOG_TITLE: '프로필 이미지 편집',
  CROP_CANCEL: '취소',
  CROP_SAVE: '완료',
  ZOOM_LABEL: '확대/축소',
} as const

// 에러 메시지
export const IMAGE_ERROR_MESSAGES = {
  FILE_TOO_LARGE: '이미지 파일 크기는 5MB 이하여야 합니다.',
  INVALID_FORMAT: '지원하지 않는 이미지 형식입니다. (jpg, png, webp만 가능)',
  UPLOAD_FAILED: '이미지 업로드에 실패했습니다.',
  LOAD_FAILED: '이미지를 불러오는데 실패했습니다.',
  DELETE_SUCCESS: '이미지가 삭제되었습니다!',
  DELETE_FAILED: '이미지 삭제에 실패했습니다.',
  UPLOAD_SUCCESS: '이미지가 저장되었습니다!',
} as const

export const PORTFOLIO = [
  'Game',
  'Web',
  'App',
  'Design',
  'Programming',
] as const
