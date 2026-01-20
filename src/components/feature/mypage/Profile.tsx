import ProfileDesktop from './ui/desktop/ProfileDesktopUi'
import ProfileMobile from './ui/mobile/ProfileMobileUi'

type ProfileProps = {
  imageUrl: string
}

export default function Profile({ imageUrl }: ProfileProps) {
  return (
    <>
      <div className="block lg:hidden">
        <ProfileMobile imageUrl={imageUrl} />
      </div>
      <div className="hidden lg:block">
        <ProfileDesktop imageUrl={imageUrl} />
      </div>
    </>
  )
}
