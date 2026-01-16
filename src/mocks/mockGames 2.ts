import { StaticImageData } from 'next/image'

import game1 from '@/assets/images/games/game1.png'
import game2 from '@/assets/images/games/game2.png'

export type MockGame = {
  id: string
  name: string
  imgUrl: string | StaticImageData
  genres: string[]
  platforms: string[]
  players: string[]
  price: string
  mood: string[]
}

const MOCK_GAMES: MockGame[] = [
  {
    id: '1',
    name: 'Cyberpunk 2077',
    imgUrl: game1,
    genres: ['RPG', '액션', '슈팅'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    players: ['싱글플레이'],
    price: '유료',
    mood: ['어두운', '공상과학'],
  },
  {
    id: '2',
    name: 'The Witcher 3',
    imgUrl: game2,
    genres: ['RPG', '어드벤처', '액션'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    players: ['싱글플레이'],
    price: '유료',
    mood: ['판타지', '어두운'],
  },
  {
    id: '3',
    name: 'Elden Ring',
    imgUrl: game1,
    genres: ['RPG', '액션'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    players: ['싱글플레이', '멀티플레이', '온라인 PvP'],
    price: '유료',
    mood: ['어두운', '판타지'],
  },
  {
    id: '4',
    name: "Baldur's Gate 3",
    imgUrl: game1,
    genres: ['RPG', '전략'],
    platforms: ['PC', 'PlayStation'],
    players: ['싱글플레이', '멀티플레이', '협동'],
    price: '유료',
    mood: ['판타지'],
  },
  {
    id: '5',
    name: 'Red Dead Redemption 2',
    imgUrl: game1,
    genres: ['액션', '어드벤처'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    players: ['싱글플레이', '멀티플레이'],
    price: '유료',
    mood: ['현실적인'],
  },
  {
    id: '6',
    name: 'Minecraft',
    imgUrl: game2,
    genres: ['샌드박스', '어드벤처', '시뮬레이션'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'],
    players: ['싱글플레이', '멀티플레이', '협동'],
    price: '유료',
    mood: ['밝은', '캐주얼'],
  },
  {
    id: '7',
    name: 'Valorant',
    imgUrl: game1,
    genres: ['슈팅', '전략'],
    platforms: ['PC'],
    players: ['멀티플레이', '온라인 PvP'],
    price: '무료',
    mood: ['공상과학'],
  },
  {
    id: '8',
    name: 'Stardew Valley',
    imgUrl: game2,
    genres: ['시뮬레이션', '인디'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'],
    players: ['싱글플레이', '멀티플레이', '협동'],
    price: '1만원 이하',
    mood: ['밝은', '감동적인'],
  },
]

export default MOCK_GAMES
