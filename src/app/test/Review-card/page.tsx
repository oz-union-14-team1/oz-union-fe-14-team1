import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/review/ReviewCard'

export default function test() {
  return (
    <Card>
      <CardHeader>
        <p>아바타</p>
      </CardHeader>
      <CardContent>
        <p>댓글</p>
      </CardContent>
      <CardFooter>
        <button>답글달기</button>
      </CardFooter>
    </Card>
  )
}
