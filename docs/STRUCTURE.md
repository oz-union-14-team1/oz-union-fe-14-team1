# 📁 Project Structure

> Feature 기반 프로젝트 폴더 구조입니다.

---

## 디렉토리 구조

```
📦 프로젝트 루트
│
├── 📂 docs/                      # 📚 프로젝트 문서
│   ├── README.md
│   ├── CONVENTION.md
│   ├── BRANCH.md
│   ├── COMMIT.md
│   ├── STRUCTURE.md
│   ├── API.md
│   └── TROUBLESHOOTING.md
│
├── 📂 src/
│   ├── 📂 api/                   # 🔌 API 중앙 관리
│   │   ├── instance.ts           # Axios 인스턴스 설정
│   │   ├── auth.ts               # Auth 관련 API
│   │   ├── admin.ts              # Admin 관련 API
│   │   └── exams.ts              # Exam 관련 API
│   │
│   ├── 📂 assets/                # 🖼️ 전역 정적 파일
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── 📂 components/            # 🧩 전역 공통 UI 컴포넌트
│   │   ├── common/               # 버튼, 인풋, 모달 등 기초 UI
│   │   └── layout/               # 헤더, 푸터, 사이드바 등 레이아웃
│   │
│   ├── 📂 constants/             # 📌 전역 상수
│   │   └── dev.ts
│   │
│   ├── 📂 features/              # ✨ 기능(Feature) 단위 비즈니스 로직
│   │   ├── auth/
│   │   │   ├── components/       # LoginForm, SignupForm 등
│   │   │   ├── hooks/            # useLogin, useAuthCheck 등
│   │   │   ├── types/            # User, AuthResponse 등
│   │   │   └── utils/            # tokenValidator 등
│   │   │
│   │   ├── exam/
│   │   │   ├── components/       # ExamForm, ExamCreate 등
│   │   │   ├── hooks/            # useExamAttempt, useSearchParam 등
│   │   │   └── types/
│   │   │
│   │   └── admin/
│   │       ├── components/       # AccountList, AccountDetail 등
│   │       ├── hooks/
│   │       └── types/
│   │
│   ├── 📂 hooks/                 # 🪝 전역 유틸리티 훅
│   │   └── useTheme.ts           # 다크모드, 윈도우 리사이즈 등
│   │
│   ├── 📂 pages/                 # 📄 라우팅 페이지 (Features 조립)
│   │   ├── HomePage.tsx
│   │   ├── ExamPage.tsx
│   │   └── AdminPage.tsx
│   │
│   ├── 📂 stores/                # 🗃️ 전역 클라이언트 상태 (Zustand)
│   │   └── useAppStore.ts
│   │
│   ├── 📂 types/                 # 📝 전역 공유 타입
│   │
│   ├── 📂 utils/                 # 🔧 전역 유틸리티 함수
│   │   └── dateFormat.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
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

## Features 폴더 구조

> **Feature 기반 아키텍처**를 사용합니다.  
> 각 Feature는 서로 **독립적**이어야 하며, **상호 참조하지 않습니다.**

```
📂 features/auth/
├── components/       # Feature 전용 컴포넌트
├── hooks/            # Feature 전용 커스텀 훅
├── types/            # Feature 전용 타입 정의
└── utils/            # Feature 전용 유틸리티
```

---

## 컴포넌트 폴더 구조

```
📂 button/
├── Button.tsx          # 컴포넌트 로직
├── Button.stories.tsx  # Storybook 스토리
├── Button.test.tsx     # 테스트 (선택)
└── index.ts            # barrel export
```

---

## 참고사항

> - **Feature는 서로 독립적**: auth, exam, admin은 서로 참조하지 않습니다
> - **Pages는 조립만**: 페이지에서는 Features의 컴포넌트를 조립만 합니다
> - **전역 vs Feature**: 2개 이상의 Feature에서 사용하면 전역으로 이동
> - **barrel export** 패턴을 사용하여 import를 간결하게 유지합니다

---

<p align="right"><a href="../README.md">⬅️ Back to README</a></p>
