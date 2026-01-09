import Badge from '../../../components/common/badge/Badge'

const mockTags = ['Action', 'RPG', 'Multiplayer', 'Indie', 'Fantasy']

export default function BadgeTestPage() {
  return (
    <main className="min-h-screen bg-neutral-900 p-10 text-white">
      <h1 className="mb-6 text-2xl font-bold">Badge / Tag UI Test</h1>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Game Tags</h2>

        <div className="flex flex-wrap gap-2">
          {mockTags.map((tag) => (
            <Badge key={tag} variant="lightcyan">
              #{tag}
            </Badge>
          ))}
        </div>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Variant Preview</h2>

        <div className="flex flex-wrap gap-2">
          <Badge variant="lightcyan">#Action</Badge>
          <Badge variant="purple">#RPGRPGRPGRPGRPG</Badge>
          <Badge variant="cyan">#Indie</Badge>
          <Badge variant="lightpurple">#Casual</Badge>
          <Badge variant="darksky">#RPGRPGRPGRPGRPG</Badge>
        </div>
      </section>
    </main>
  )
}
