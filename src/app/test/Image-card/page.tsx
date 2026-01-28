import { ImageCard } from '@/components/feature/review/ImageCard'

const response = {
  imgUrl: 'https://my-bucket.s3.amazonaws.com/...',
  key: 'uploads/images/...',
}

export default function Page() {
  return <ImageCard imgUrl={response.imgUrl} name="젤다" id={response.key} />
}
