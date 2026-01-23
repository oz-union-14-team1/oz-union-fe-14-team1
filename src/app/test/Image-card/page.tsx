import { ImageCard } from '@/components/feature/review/ImageCard'

const response = {
  imgUrl: 'https://my-bucket.s3.amazonaws.com/...',
  key: 'uploads/images/...',
}

export default function Page() {
  return (
    <ImageCard
      imgUrl={response.imgUrl}
      name="젤다의 전설: 야생의 숨결"
      id={response.key}
    />
  )
}
