import { Pencil } from 'lucide-react'

function ProfileDesktopNameUi() {
  return (
    <div className="flex items-center gap-3">
      <p className="hidden pt-4 pl-43 text-2xl font-semibold whitespace-nowrap text-text-light md:block">
        NAME (DESKTOP)
      </p>
      <button
        type="button"
        title="EDIT PROFILE IMAGE"
        className="group/edit relative mt-3 hidden size-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-main-purple/30 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)] active:scale-95 md:flex"
      >
        <Pencil className="size-4 text-text-light transition-colors duration-300 group-hover/edit:text-main-purple" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/edit:opacity-100" />
      </button>
    </div>
  )
}

function ProfileMobileNameUi() {
  return (
    <div className="z-7 mt-5 ml-11 flex items-center justify-center gap-3">
      <p className="text-center text-[22px] font-semibold whitespace-nowrap text-text-light lg:hidden">
        NAME (MOBILE)
      </p>
      <button
        type="button"
        title="EDIT PROFILE IMAGE"
        className="group/edit relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-main-purple/30 hover:bg-white/10 hover:shadow-[0_4px_12px_rgba(168,85,247,0.3)] active:scale-95 lg:hidden"
      >
        <Pencil className="size-4 text-text-light transition-colors duration-300 group-hover/edit:text-main-purple" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/edit:opacity-100" />
      </button>
    </div>
  )
}

export { ProfileDesktopNameUi, ProfileMobileNameUi }
