# 📌 Branch Strategy

> Git Flow를 간소화한 브랜치 전략을 사용합니다.

---

## 브랜치 구조

```
main (배포)
└── develop (개발)
    ├── feature/이슈번호--기능명
    ├── fix/이슈번호--버그명
    ├── refactor/이슈번호--리팩토링명
    ├── style/이슈번호--스타일명
    ├── chore/이슈번호--작업명
    ├── docs/이슈번호--문서명
    ├── test/이슈번호--테스트명
    ├── build/이슈번호--빌드명
    ├── perf/이슈번호--성능개선명
    └── ci/이슈번호--CI작업명
```

---

## 브랜치 유형

| 브랜치     | 설명                               |
| ---------- | ---------------------------------- |
| `main`     | 배포 가능한 상태의 브랜치          |
| `develop`  | 개발 중인 기능들이 통합되는 브랜치 |
| `feature`  | 새로운 기능 개발                   |
| `fix`      | 버그 수정                          |
| `refactor` | 코드 리팩토링                      |
| `style`    | 코드 포맷팅, 세미콜론 등           |
| `chore`    | 빌드, 패키지 매니저 설정           |
| `docs`     | 문서 수정                          |
| `test`     | 테스트 코드 추가 및 수정           |
| `build`    | 빌드 관련 수정                     |
| `perf`     | 성능 개선                          |
| `ci`       | CI 설정 수정                       |

---

## 브랜치 생성 규칙

> 기능별 브랜치를 `develop` 브랜치로부터 분기하여 생성합니다.

### 네이밍 규칙

```
<타입>/이슈번호--<작업명>
```

### 예시

```bash
feature/12--implement-wishlist
fix/20--close-modal-bug
refactor/15--restructure-components
```

---

## PR Review & Merge

> - 기능 개발 완료 시 `develop` 브랜치로 PR
> - **2명 이상의 PR 리뷰 승인** 필요
> - **팀장만** 병합 가능
> - 병합 직전 **리베이스 최신 상태** 확인
> - Merge 후 해당 브랜치 삭제

---

<p align="right"><a href="../README.md">⬅️ Back to README</a></p>
