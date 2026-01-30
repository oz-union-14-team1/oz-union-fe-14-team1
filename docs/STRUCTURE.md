# 📁 Project Structure

> PLAYTYPE는 도메인 + Feature 기반 구조를 바탕으로 페이지, 비즈니스 로직, UI 책임을 명확히 분리한 프로젝트입니다.

---

## 디렉토리 구조

```
📦 프로젝트 루트
│
├── 📂 public/                         # 🌐 정적 리소스
│   ├── images/                        # 게임 / 장르 이미지
│   └── mockServiceWorker.js           # MSW 실행 스크립트
│
├── 📂 docs/                           # 📚 프로젝트 문서
│   ├── README.md
│   ├── BRANCH.md
│   ├── COMMIT.md
│   ├── CONVENTION.md
│   └── STRUCTURE.md
│
├── 📂 src/
│   ├── 📂 app/                        # 📄 Next.js App Router
│   │   ├── (auth)/                    # 로그인 / 회원가입 / 계정 찾기
│   │   ├── community/                 # 커뮤니티 메인
│   │   ├── genre/[slug]/              # 장르별 게임 목록
│   │   ├── mypage/                    # 마이페이지
│   │   ├── recommendation/            # 온보딩 & 플레이타입 추천
│   │   ├── review/[gameId]/[reviewId] # 리뷰 상세
│   │   ├── search/                    # 검색 페이지
│   │   ├── test/                      # 개발용 테스트 페이지
│   │   ├── layout.tsx                 # 전역 레이아웃
│   │   ├── page.tsx                   # 메인 페이지
│   │   └── not-found.tsx              # 404 페이지
│   │
│   ├── 📂 api/                        # 🔌 API 레이어
│   │   ├── fetchers/                  # Axios 기반 요청 함수
│   │   └── queries/                   # TanStack Query 커스텀 훅
│   │
│   ├── 📂 assets/                     # 🖼️ 전역 에셋
│   │   ├── images/
│   │   ├── icons/
│   │   └── lottie/
│   │
│   ├── 📂 components/                 # 🧩 UI 컴포넌트
│   │   ├── common/                    # 공통 UI (Button, Tag 등)
│   │   ├── feature/                   # 도메인별 컴포넌트
│   │   └── layout/                    # Header, Filter UI 등
│   │
│   ├── 📂 hooks/                      # 🪝 전역 커스텀 훅
│   │
│   ├── 📂 store/                      # 🗃️ Zustand 전역 상태
│   │
│   ├── 📂 mocks/                      # 🧪 MSW Mock
│   │
│   ├── 📂 constants/                  # 📌 전역 상수
│   ├── 📂 types/                      # 📝 타입 정의
│   ├── 📂 utils/                      # 🔧 유틸 함수
│   │
│   ├── globals.css
│   └── token.css                      # 디자인 토큰
│
├── tailwindconfig.ts
└── tsconfig.json
```

---

## 주요 디렉토리 설명

| 디렉토리     | 설명                                                      |
| ------------ | --------------------------------------------------------- |
| `api`        | Axios 인스턴스 및 API 호출 함수 중앙 관리                 |
| `assets`     | 이미지, 아이콘, 폰트 등 정적 파일                         |
| `components` | 전역에서 재사용되는 공통 UI 컴포넌트                      |
| `constants`  | 전역 상수 정의                                            |
| `features`   | 기능(도메인) 단위 비즈니스 로직 (컴포넌트, 훅, 타입 포함) |
| `hooks`      | 특정 도메인에 속하지 않는 전역 유틸리티 훅                |
| `pages`      | 라우팅 페이지 - Features를 조립하는 곳                    |
| `stores`     | Zustand 전역 상태 관리                                    |
| `types`      | 전역 공유 타입 (ApiResponse 등)                           |
| `utils`      | 전역 유틸리티 함수                                        |

---

## app (Routing) 구조

> **라우팅은 URL 기준**, **로직은 Feature 기준**으로 분리합니다.

```bash
📂 app/
├── (auth)/            # 인증 관련 페이지
├── recommendation/    # 온보딩 / 추천
├── mypage/            # 개인화 영역
├── community/         # 커뮤니티
├── review/            # 리뷰 상세
├── search/            # 검색
└── test/              # 개발용 테스트 페이지
```

---

## components 구조

### common/

> 서비스 전반에서 재사용되는 **기초 UI 컴포넌트**

```
📂 common/
├── button/
├── tag/
├── carousel/
└── toast/
```

---

### feature/

> **도메인(기능) 단위 컴포넌트 구조**

```
📂 feature/
├── auth/
├── main/
├── mypage/
├── recommendation/
├── review/
└── search-page/
```

- Feature 간 직접 참조 ❌
- 공통으로 쓰이면 `common` 으로 이동

---

### api 구조/

```
📂 api/
├── fetchers/   # 순수 API 요청 함수
└── queries/    # useQuery / useMutation 훅
```

- 컴포넌트에서 직접 axios 호출 ❌
- 쿼리 훅만 사용

---

### store (Zustand)n/

```
📂 store/
├── useAuthStore.ts
├── useOnboardingStore.ts
└── useWishlistStore.ts
```

- 도메인별 store 분리
- 전역 상태 최소화 원칙

---

### mocks (MSW)

```
📂 mocks/
├── handlers/
├── data/
├── browser.ts
└── server.ts
```

- 개발 환경에서 실제 API없이 UI/로직 검증
- Test Page와 함께 사용

---

## 구조 설계 원칙

> PLAYTYPE은 아래 원칙을 기준으로 구조를 설계했습니다.

> - **Routing ≠ Business Logic**
> - **Feature 단위 응집**
> - **전역 최소화, 도메인 중심**
> - **UI / 상태 / API 역할 분리**
> - **테스트 및 확장 고려**

---

<p align="right"><a href="../README.md">⬅️ Back to README</a></p>
