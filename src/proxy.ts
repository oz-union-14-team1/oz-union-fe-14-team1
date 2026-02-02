import { NextRequest, NextResponse } from 'next/server'

/**
 * 미들웨어 예외처리 루트
 */
const PUBLIC_PATHS = ['/login', '/find-id', '/find-password', '/signup']

const PROTECTED_PATHS = ['/mypage']
// /**
//  * 미들웨어 서버 가드
//  * 사용자가 직접 url을 치고 접속하지 못하게 하기 위해 생성
//  */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  if (PROTECTED_PATHS.some((path) => pathname.startsWith(path))) {
    const refreshToken = req.cookies.get('refreshToken')

    if (!refreshToken) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  return NextResponse.next()
}

// /**
//  * 적용 경로 제한
//  */
export const config = {
  matcher: ['/mypage/:path*', '/community/reviews/:path*'],
}
