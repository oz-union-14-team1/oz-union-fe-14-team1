import { ProfileDesktopUi, ProfileMobileUi } from './index'

type ProfileProps = {
  imageUrl: string
}

export default function Profile({ imageUrl }: ProfileProps) {
  return (
    <>
      <div className="block lg:hidden">
        <ProfileMobileUi imageUrl={imageUrl} />
      </div>
      <div className="hidden lg:block">
        <ProfileDesktopUi imageUrl={imageUrl} />
      </div>
    </>
  )
}
