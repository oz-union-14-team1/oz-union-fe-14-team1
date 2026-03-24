import { MessageSquare } from 'lucide-react'

import CommunityBanner from '@/components/feature/community/CommunityBanner'
import CommunityContent from '@/components/feature/community/CommunityContents'

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-345">
      <CommunityBanner />

      <div className="flex items-center gap-1 md:gap-2">
        <div className="shrink-0 rounded-full bg-main-violet/10 p-1.5 shadow-[0_0_20px_10px] shadow-main-violet/10 backdrop-blur-xl md:p-2">
          <MessageSquare className="h-2.5 w-3 fill-main-violet text-transparent md:h-4.5 md:w-5" />
        </div>
        <h2 className="truncate text-[18px] font-bold text-text-light md:text-2xl">
          실시간 리뷰
        </h2>
      </div>

      <CommunityContent />
    </div>
  )
}
