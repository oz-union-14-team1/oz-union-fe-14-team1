import { NextRequest, NextResponse } from 'next/server'

/**
 * 미들웨어 서버 가드
 * 사용자가 직접 url을 치고 접속하지 못하게 하기 위해 생성
 */
export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get('refreshToken')

  if (!refreshToken) {
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

/**
 * 적용 경로 제한
 */
export const config = {
  matcher: ['/mypage/:path*', '/community/reviews/:path*', '/user/me'],
}
