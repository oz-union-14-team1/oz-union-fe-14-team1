import GameLoader from '@/components/common/game-loader/GameLoader'

export default function GameLoaderTestPage() {
  return (
    <main className="min-h-screen bg-neutral-900 p-10 text-white">
      <h1 className="mb-10 text-2xl font-bold">GameLoader UI Test</h1>

      <section className="space-y-8">
        <h2 className="text-lg font-semibold">Default</h2>
        <div className="flex justify-center rounded-lg bg-neutral-800 p-10">
          <GameLoader />
        </div>
      </section>
    </main>
  )
}
