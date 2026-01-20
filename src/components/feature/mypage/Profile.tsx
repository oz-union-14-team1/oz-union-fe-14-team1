import ProfileDesktop from './ui/desktop/ProfileDesktopUi'
import ProfileMobile from './ui/mobile/ProfileMobileUi'

type ProfileProps = {
  imageUrl: string
}

export default function Profile({ imageUrl }: ProfileProps) {
  return (
    <>
      <div className="block md:hidden">
        <ProfileMobile imageUrl={imageUrl} />
      </div>
      <div className="hidden md:block">
        <ProfileDesktop imageUrl={imageUrl} />
      </div>
    </>
  )
}
