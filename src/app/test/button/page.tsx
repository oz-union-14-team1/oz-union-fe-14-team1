import Button from '@/components/common/button/Button'

const variants = ['main', 'sub', 'outline', 'gray'] as const
const sizes = ['sm', 'md', 'big'] as const

export default function ButtonTestPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-24 text-white">
      <div className="w-full max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold">Button Component Variants</h1>
        <div className="space-y-10">
          {variants.map((variant) => (
            <div key={variant}>
              <h2 className="mb-4 border-b pb-2 text-xl font-semibold capitalize">
                {variant}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-start gap-4">
                  <h3 className="font-medium">Default</h3>
                  {sizes.map((size) => (
                    <Button key={size} variant={variant} size={size}>
                      {`Button ${size}`}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-col items-start gap-4">
                  <h3 className="font-medium">Disabled</h3>
                  {sizes.map((size) => (
                    <Button key={size} variant={variant} size={size} disabled>
                      {`Button ${size}`}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
