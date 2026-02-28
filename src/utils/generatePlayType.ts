import {
  GENRE_TRAITS,
  PLAYTYPE_EMOJI,
  PLAYTYPE_LABELS,
  TAG_TRAITS,
} from '@/constants'
import { MOCK_GENRES, MOCK_TAGS } from '@/mocks'
import { PlayTypeResult, TraitScores } from '@/types'

import { buildDescription } from './buildDescription'

const TAG_ID_MAP = Object.fromEntries(
  MOCK_TAGS.map((tag) => [tag.id, `#${tag.tag}`])
)
const GENRE_ID_MAP = Object.fromEntries(
  MOCK_GENRES.map((genre) => [genre.id, genre.genre])
)

/**
 * 선택된 태그와 장르를 기반으로 성향 점수 계산
 */
const calculateTraitScores = (
  selectedTags: string[],
  selectedGenres: string[]
): TraitScores => {
  const scores: TraitScores = {}

  selectedTags.forEach((tag) => {
    const mapping = TAG_TRAITS[tag]
    if (mapping) {
      const { trait, weight } = mapping
      scores[trait] = (scores[trait] || 0) + weight
    }
  })

  selectedGenres.forEach((genre) => {
    const mapping = GENRE_TRAITS[genre]
    if (mapping) {
      mapping.traits.forEach((trait) => {
        scores[trait] = (scores[trait] || 0) + mapping.weight
      })
    }
  })

  return scores
}

/**
 * 점수 기반으로 상위 N개 성향 추출
 */
const getTopTraits = (scores: TraitScores, count: number): string[] => {
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([trait]) => trait)
}

/**
 * 성향 조합으로 플레이타입 문구 생성
 */
const buildPlayTypeTitle = (topTraits: string[]): string => {
  const { prefix, middle, suffix } = PLAYTYPE_LABELS

  let prefixWord = ''
  let middleWord = ''
  let suffixWord = '게이머'

  for (const trait of topTraits) {
    if (!prefixWord && prefix[trait]) {
      prefixWord = prefix[trait]
    } else if (!middleWord && middle[trait]) {
      middleWord = middle[trait]
    } else if (suffixWord === '게이머' && suffix[trait]) {
      suffixWord = suffix[trait]
    }
  }

  if (!prefixWord) {
    prefixWord = '열정적인'
  }

  return `${prefixWord} ${middleWord} ${suffixWord}`.replace(/\s+/g, ' ').trim()
}

/**
 * 대표 이모지 선택
 */
const getEmoji = (topTraits: string[]): string => {
  for (const trait of topTraits) {
    if (PLAYTYPE_EMOJI[trait]) {
      return PLAYTYPE_EMOJI[trait]
    }
  }
  return '🎮'
}

/**
 * 메인 함수: 플레이타입 결과 생성
 */
export const generatePlayType = (
  selectedTagIds: number[],
  selectedGenreIds: number[]
): PlayTypeResult => {
  const selectedTags = selectedTagIds
    .map((id) => TAG_ID_MAP[id])
    .filter(Boolean)
  const selectedGenres = selectedGenreIds
    .map((id) => GENRE_ID_MAP[id])
    .filter(Boolean)

  const scores = calculateTraitScores(selectedTags, selectedGenres)
  const topTraits = getTopTraits(scores, 5)

  return {
    title: buildPlayTypeTitle(topTraits),
    emoji: getEmoji(topTraits),
    description: buildDescription(topTraits),
    dominantTraits: topTraits,
  }
}
