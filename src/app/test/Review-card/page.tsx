import { Card } from '@/components/feature/review/ReviewCard'

export default function ReviewerCard() {
  return (
    <Card>
      <Card.Header>유저 정보</Card.Header>
      <Card.Content>리뷰 내용</Card.Content>
      <Card.Footer>답글 버튼</Card.Footer>
    </Card>
  )
}
