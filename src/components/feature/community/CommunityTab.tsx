import { Tag } from '@/components/common'
import { COMMUNITY_OPTIONS } from '@/constants/communityOptions'

type CommunityTabProps = {
  tabs: typeof COMMUNITY_OPTIONS
  activeTab: string
  onChange: (value: string) => void
}

export default function CommunityTab({
  tabs,
  activeTab,
  onChange,
}: CommunityTabProps) {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <Tag
          key={tab.value}
          label={tab.label}
          isSelected={activeTab === tab.value}
          onClick={() => onChange(tab.value)}
        />
      ))}
    </div>
  )
}
