import action from '@/assets/images/genres/action.png'
import adventure from '@/assets/images/genres/adventure.png'
import arcade from '@/assets/images/genres/arcade.png'
import horror from '@/assets/images/genres/horror.png'
import puzzle from '@/assets/images/genres/puzzle.png'
import racing from '@/assets/images/genres/racing.png'
import roguelike from '@/assets/images/genres/roguelike.png'
import rpg from '@/assets/images/genres/rpg.png'
import shooting from '@/assets/images/genres/shooting.png'
import simulation from '@/assets/images/genres/simulation.png'
import sports from '@/assets/images/genres/sports.png'
import survival from '@/assets/images/genres/survival.png'
import { Genre } from '@/types/game'

export const MOCK_GENRES: Genre[] = [
  { id: 3, name: '어드벤처', imgUrl: adventure },
  { id: 4, name: '액션', imgUrl: action },
  { id: 8, name: '슈팅', imgUrl: shooting },
  { id: 10, name: 'RPG', imgUrl: rpg },
  { id: 9, name: '시뮬레이션', imgUrl: simulation },
  { id: 83, name: '퍼즐', imgUrl: puzzle },
  { id: 14, name: '로그라이크', imgUrl: roguelike },
  { id: 1, name: '서바이벌', imgUrl: survival },
  { id: 15, name: '아케이드', imgUrl: arcade },
  { id: 57, name: '레이싱', imgUrl: racing },
  { id: 25, name: '호러', imgUrl: horror },
  { id: 34, name: '스포츠', imgUrl: sports },
]
