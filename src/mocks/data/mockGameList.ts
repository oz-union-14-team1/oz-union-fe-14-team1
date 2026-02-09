import { Game } from '@/types/api-response/game-response'

export const MOCK_GAME: Game[] = [
  {
    id: 1,
    name: 'Kingdom Come: Deliverance II',
    image: '/images/games/bg-game1.jpg',
    tags: ['1', '2'],
    releasedAt: '2024-12-15',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
  },
  {
    id: 2,
    name: "Sid Meier's Civilization VII",
    image: '/images/games/bg-game2.jpg',
    tags: ['1', '2'],
    releasedAt: '2024-08-20',
    platforms: ['PC'],
  },
  {
    id: 3,
    name: 'Hell is Us',
    image: '/images/games/bg-game3.jpg',
    tags: ['2', '5', '10'],
    releasedAt: '2025-01-10',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
  },
  {
    id: 4,
    name: 'EA SPORTS Madden NFL 26',
    image: '/images/games/bg-game4.png',
    tags: ['1', '2'],
    releasedAt: '2024-06-01',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
  },
  {
    id: 5,
    name: 'Among Us',
    image: '/images/games/bg-game5.jpg',
    tags: ['3', '12', '13'],
    releasedAt: '2023-11-15',
    platforms: ['PC', 'iOS', 'Android', 'Nintendo Switch'],
  },
  {
    id: 6,
    name: 'SILENT HILL 2',
    image: '/images/games/bg-game6.jpg',
    tags: ['1', '2', '14'],
    releasedAt: '2024-10-08',
    platforms: ['PlayStation 5'],
  },
]
