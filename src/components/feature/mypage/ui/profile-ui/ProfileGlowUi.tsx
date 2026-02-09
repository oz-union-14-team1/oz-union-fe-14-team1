function ProfileDesktopGlowUi() {
  return (
    <div className="absolute top-2.5 left-2.5 z-2 h-35.75 w-35.75 rounded-full">
      <div className="absolute -inset-6 animate-pulse rounded-full bg-main-purple opacity-20 blur-3xl" />
      <div className="absolute -inset-4 rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-2xl" />
      <div className="absolute -inset-2 rounded-full bg-main-violet opacity-40 blur-xl" />
      <div className="absolute -inset-1 rounded-full bg-linear-to-br from-main-purple to-main-fuchsia opacity-50 blur-md" />
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-20 blur-md" />
      <div className="absolute -inset-2 animate-pulse rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-xl" />
    </div>
  )
}

function ProfileMobileGlowUi() {
  return (
    <div className="absolute top-2.5 left-1/2 z-2 h-35.75 w-35.75 -translate-x-1/2 rounded-full">
      <div className="absolute -inset-6 animate-pulse rounded-full bg-main-purple opacity-20 blur-3xl" />
      <div className="absolute -inset-4 rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-2xl" />
      <div className="absolute -inset-2 rounded-full bg-main-violet opacity-40 blur-xl" />
      <div className="absolute -inset-1 rounded-full bg-linear-to-br from-main-purple to-main-fuchsia opacity-50 blur-md" />
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-20 blur-md" />
      <div className="absolute -inset-2 animate-pulse rounded-full bg-linear-to-br from-main-purple via-main-violet to-main-fuchsia opacity-30 blur-xl" />
    </div>
  )
}

export { ProfileDesktopGlowUi, ProfileMobileGlowUi }
