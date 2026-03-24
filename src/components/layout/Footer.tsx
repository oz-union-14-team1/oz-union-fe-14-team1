import { Github } from 'lucide-react'
import Link from 'next/link'

import { FRONTEND_STACK } from '@/constants/techStack'

const baseTagStyle =
  'rounded-full border border-white/20 px-3 py-1 text-white/70 text-xs \
   transition-all duration-300 ease-out backdrop-blur-sm'

const frontendHover =
  'hover:text-white hover:border-purple-400/70 hover:bg-gradient-main \
   hover:shadow-[0_0_18px_rgba(139,92,246,0.45)] hover:scale-105'

export default function Footer() {
  return (
    <footer
      className="relative mt-32 overflow-hidden border-t border-white/10"
      style={{
        background: `
    radial-gradient(ellipse at 50% -35%, rgba(139,92,246,0.07), transparent 65%),
    radial-gradient(ellipse at 80% 130%, rgba(34,211,238,0.04), transparent 65%),
    #1f1f23
    `,
      }}
    >
      <div className="mx-auto max-w-5xl px-6 py-15">
        <div className="mb-16 text-center">
          <h2 className="bg-gradient-main bg-clip-text text-3xl font-bold text-transparent">
            PLAYTYPE
          </h2>
          <p className="mt-4 text-sm text-white/60">
            🎮 당신의 게임 취향을 데이터로 발견하다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          <div>
            <h3 className="mb-4 font-semibold text-white">Service</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>추천 게임</li>
              <li>장르 탐색</li>
              <li>리뷰</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Tech Stack</h3>

            <p className="mb-2 text-xs text-purple-400">Frontend</p>
            <ul className="mb-10 flex flex-wrap gap-2 text-xs">
              {FRONTEND_STACK.map((tech) => (
                <li key={tech} className={`${baseTagStyle} ${frontendHover}`}>
                  {tech}
                </li>
              ))}
            </ul>

            {/* GitHub */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Open Source</h3>
              <div className="space-y-3 text-sm text-white/60">
                <Link
                  href="https://github.com/oz-union-14-team1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-main-violet"
                >
                  <Github size={16} />
                  Organization Repository
                </Link>
                <Link
                  href="https://github.com/oz-union-14-team1/oz-union-fe-14-team1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-main-violet"
                >
                  <Github size={16} />
                  Frontend Repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 */}
        <div className="mt-20 border-t border-white/5 pt-6 text-center text-xs text-white/40">
          © 2025 PLAYTYPE. Built with ❤️ by Team PLAYTYPE.
        </div>
      </div>
    </footer>
  )
}
