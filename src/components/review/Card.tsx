import { cn } from '@/utils'

export default function ReviewPage() {
  return (
    <Card>
      <CardHeader>유저 정보</CardHeader>
      <CardContent>리뷰 내용</CardContent>
      <CardFooter>답글 버튼</CardFooter>
    </Card>
  )
}
// 1. 전체 카드 컨테이너
function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border border-white/5 bg-[#1A1A1A] text-white shadow-sm',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    // 보더를 빼고 패딩을 조절해서 유연하게 사용
    <div
      className={cn('flex items-center justify-between p-6 pb-0', className)}
      {...props}
    />
  )
}

// 3. 메인 내용 영역 (텍스트)
function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pt-2 text-[#E5E5E5]', className)} {...props} />
}

// 4. 하단 영역 (답글 달기 버튼 등)
function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex justify-end p-6 pt-0', className)} {...props} />
  )
}
Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

export { Card, CardHeader, CardContent, CardFooter }
