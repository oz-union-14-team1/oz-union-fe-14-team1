/**
 * 태그 → 성향(trait) 매핑
 * trait: 내부적으로 사용하는 성향 키
 * category: 대분류
 * weight: 결과 계산 시 가중치 (기본 1, 중요한 건 2)
 */
export const TAG_TRAITS: Record<
  string,
  {
    trait: string
    category: string
    weight: number
  }
> = {
  '#싱글플레이': { trait: 'solo', category: 'play_style', weight: 2 },
  '#멀티플레이': { trait: 'social', category: 'play_style', weight: 2 },
  '#협동플레이': { trait: 'cooperative', category: 'play_style', weight: 2 },
  '#경쟁플레이': { trait: 'competitive', category: 'play_style', weight: 2 },
  '#스토리중심': { trait: 'story', category: 'atmosphere', weight: 2 },
  '#몰입형': { trait: 'immersive', category: 'atmosphere', weight: 2 },
  '#캐주얼': { trait: 'casual', category: 'atmosphere', weight: 2 },
  '#하드코어': { trait: 'challenging', category: 'atmosphere', weight: 2 },
  '#힐링': { trait: 'healing', category: 'atmosphere', weight: 2 },
  '#긴장감': { trait: 'intense', category: 'atmosphere', weight: 2 },
  '#액션': { trait: 'action', category: 'gameplay', weight: 2 },
  '#전략적인': { trait: 'strategic', category: 'gameplay', weight: 2 },
  '#퍼즐요소': { trait: 'puzzle', category: 'gameplay', weight: 1 },
  '#탐험': { trait: 'explorer', category: 'gameplay', weight: 2 },
  '#수집요소': { trait: 'collector', category: 'gameplay', weight: 1 },
  '#건설/제작': { trait: 'creative', category: 'gameplay', weight: 2 },
  '#그래픽이예쁜': { trait: 'visual', category: 'visual', weight: 1 },
  '#픽셀아트': { trait: 'retro', category: 'visual', weight: 1 },
  '#애니풍': { trait: 'anime', category: 'visual', weight: 1 },
  '#사운드가좋은': { trait: 'audio', category: 'visual', weight: 1 },
  '#실사풍': { trait: 'realistic', category: 'visual', weight: 1 },
  '#판타지': { trait: 'fantasy', category: 'setting', weight: 1 },
  '#SF': { trait: 'scifi', category: 'setting', weight: 1 },
  '#현대배경': { trait: 'modern', category: 'setting', weight: 1 },
  '#역사/시대물': { trait: 'historical', category: 'setting', weight: 1 },
  '#포스트아포칼립스': { trait: 'apocalypse', category: 'setting', weight: 1 },
  '#오픈월드': { trait: 'freedom', category: 'pace', weight: 2 },
  '#빠른템포': { trait: 'fast', category: 'pace', weight: 2 },
  '#느긋하게': { trait: 'peaceful', category: 'pace', weight: 2 },
  '#고난이도': { trait: 'challenging', category: 'pace', weight: 2 },

  '#감동적인': { trait: 'emotional', category: 'emotion', weight: 2 },
  '#공포': { trait: 'horror', category: 'emotion', weight: 2 },
}

/**
 * 장르 → 성향 매핑
 */
export const GENRE_TRAITS: Record<
  string,
  {
    traits: string[]
    weight: number
  }
> = {
  어드벤처: { traits: ['explorer', 'story'], weight: 1 },
  액션: { traits: ['action', 'intense'], weight: 1 },
  슈팅: { traits: ['action', 'competitive'], weight: 1 },
  RPG: { traits: ['story', 'immersive', 'character'], weight: 1 },
  퍼즐: { traits: ['strategic', 'casual'], weight: 1 },
  로그라이크: { traits: ['challenging', 'action'], weight: 1 },
  서바이벌: { traits: ['intense', 'challenging'], weight: 1 },
  시뮬레이션: { traits: ['strategic', 'freedom'], weight: 1 },
  레이싱: { traits: ['fast', 'competitive'], weight: 1 },
  스포츠: { traits: ['competitive', 'action', 'social'], weight: 1 },
  호러: { traits: ['horror', 'intense', 'immersive'], weight: 1 },
  '전략/RTS': { traits: ['strategic', 'challenging'], weight: 1 },
}
