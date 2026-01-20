import { DashBoard } from '@/components/feature/mypage'

export default function DashBoardTestPage() {
  return (
    <div>
      <DashBoard wishlistCount={10} reviewCount={5} />
    </div>
  )
}
