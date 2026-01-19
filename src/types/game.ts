import { StaticImageData } from 'next/image'

export type Game = {
  id: string
  name: string
  imgUrl: string | StaticImageData
}

export type Genre = {
  id: number
  name: string
  imgUrl: string | StaticImageData
}
