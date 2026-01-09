# 📐 Code Convention

> 일관된 코드 스타일 유지를 위한 규칙입니다.

---

## 네이밍 규칙

| 대상           | 규칙                                   | 예시                      |
| -------------- | -------------------------------------- | ------------------------- |
| 상수           | UPPER_SNAKE_CASE                       | `API_BASE_URL`            |
| Boolean 변수   | is + 동사                              | `isOpened`, `isLoading`   |
| 일반 변수      | camelCase                              | `userEmail`               |
| 배열 / 객체    | 복수형 / 단수형                        | `users` / `user`          |
| 이벤트 핸들러  | handle + 대상 + 이벤트                 | `handleLoginBtnClick`     |
| 비동기 함수    | fetch/create/update/delete + camelCase | `fetchUserList`           |
| Props 타입     | PascalCase                             | `ButtonProps`             |
| Type/Interface | PascalCase                             | `UserType`, `ApiResponse` |

---

## 파일 네이밍

| 파일 유형      | 규칙             | 예시                    |
| -------------- | ---------------- | ----------------------- |
| 컴포넌트       | PascalCase       | `CartList.tsx`          |
| 훅             | use + PascalCase | `useMovieInfo.ts`       |
| 유틸리티/상수  | camelCase        | `utils.ts`              |
| 폴더명         | kebab-case       | `intersection-observer` |
| 그 외 (svg 등) | kebab-case       | `home-logo.svg`         |

---

## 코드 스타일

### 기본 규칙

> - 하나의 함수는 **한 가지 작업만** 수행
> - 인수는 **객체로 입력받는 것** 지향
> - 참조형 데이터는 **불변성 유지**
> - **화살표 함수** 사용
> - **type** 사용 (interface 대신)
> - **any 사용 금지**

---

## 컴포넌트 작성 규칙

### 함수 컴포넌트 사용

```tsx
// ✅ Good
const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}

export default Button
```

### Props 타입 정의

```tsx
// ✅ Good - type 사용
type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
}
```

---

## Import 순서

```tsx
// 1. React 관련
import { useState, useEffect } from 'react'

// 2. 외부 라이브러리
import { useQuery } from '@tanstack/react-query'

// 3. 내부 모듈 (절대 경로)
import { Button } from '@components/common'
import { useAuth } from '@hooks'

// 4. 타입
import type { UserType } from '@custom-types'

// 5. 스타일 / 에셋
import styles from './Component.module.css'
```

---

## 모듈 내보내기

| 대상                    | 방식             |
| ----------------------- | ---------------- |
| 컴포넌트                | `export default` |
| 훅, 유틸, 상수, 타입 등 | `named export`   |

---

## 코드 품질 도구

| 도구          | 용도                   |
| ------------- | ---------------------- |
| ESLint        | 코드 린팅              |
| Prettier      | 코드 포맷팅            |
| Husky         | Git hooks (pre-commit) |
| commitlint    | 커밋 메시지 검사       |
| lint-staged   | staged 파일만 린트     |
| perfectionist | import 자동 정렬       |
| TypeScript    | 정적 타입 검사         |

---

## 설계 원칙 (SOLID)

### 단일 책임 원칙 (SRP)

> 하나의 함수/컴포넌트는 **하나의 역할만** 수행

### 개방-폐쇄 원칙 (OCP)

> 기존 코드를 **변경하지 않으면서** 기능을 확장할 수 있도록 설계

---

## Communication

| 도구    | 용도                        |
| ------- | --------------------------- |
| Discord | 실시간 소통                 |
| Notion  | 데일리 스크럼, 일정, 회의록 |
| Figma   | 디자인 협업                 |

---

<p align="right"><a href="../README.md">⬅️ Back to README</a></p>
