import { delay, http, HttpResponse } from 'msw'

import { API_PATH } from '@/constants/apiPath'

/**
 * 메모리 DB (가짜 사용자)
 */
const users = [
  {
    email: 'test@test.com',
    password: 'Qqwer1234@',
    name: '홍길동',
    nickname: 'test',
    gender: 'M',
    phone_number: '01012345678',
  },
]

/**
 * accessToken 시뮬레이션
 */
let currentToken = 'init-token'
const createToken = () => `token-${Date.now()}`
const localStorageKey = 'msw_demo_access_token'

export const authHandlers = [
  /**
   * 로그인
   */
  http.post(`${API_PATH.LOGIN_API_PATH}`, async ({ request }) => {
    await delay(300)

    const body = (await request.json()) as {
      email: string
      password: string
    }

    const user = users.find((u) => u.email === body.email)

    if (!user) {
      return HttpResponse.json(
        { message: '존재하지 않는 계정입니다.' },
        { status: 404 }
      )
    }

    if (user.password !== body.password) {
      return HttpResponse.json(
        { message: '비밀번호가 틀렸습니다.' },
        { status: 400 }
      )
    }

    currentToken = createToken()

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(localStorageKey, currentToken)
    }

    return HttpResponse.json({
      accessToken: currentToken,
    })
  }),

  /**
   * refresh token
   * interceptor가 호출함
   */
  http.get(`${API_PATH.LOGIN_REFRESH_API_PATH}`, async () => {
    await delay(200)

    const savedToken =
      typeof window !== 'undefined'
        ? window.localStorage.getItem(localStorageKey)
        : null

    if (!savedToken) {
      return HttpResponse.json(
        { message: '리프레시 토큰이 없습니다.' },
        { status: 401 }
      )
    }

    currentToken = createToken()
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(localStorageKey, currentToken)
    }

    return HttpResponse.json({ accessToken: currentToken })
  }),

  /**
   * user/me
   */
  http.get(`${API_PATH.USER_ME_API_PATH}`, async ({ request }) => {
    await delay(200)

    const auth = request.headers.get('Authorization')

    if (!auth || !auth.includes(currentToken)) {
      return HttpResponse.json({ message: '인증 실패' }, { status: 401 })
    }

    return HttpResponse.json({
      email: users[0].email,
      nickname: users[0].nickname,
      name: users[0].name,
      gender: users[0].gender,
      phoneNumber: users[0].phone_number,
      birthday: '2000-01-01',
      isActive: true,
    })
  }),

  /**
   * 로그아웃
   */
  http.post(`${API_PATH.USER_LOGOUT_API_PATH}`, async () => {
    await delay(100)
    currentToken = ''
    return HttpResponse.json({ message: '로그아웃 완료' })
  }),
]
