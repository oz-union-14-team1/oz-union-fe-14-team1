# 🎨 DESIGN TOKEN GUIDE

> 본 문서는 프로젝트 전반에서 사용하는 디자인 토큰 및 Tailwind 매핑 규칙을 정의합니다.  
> 모든 UI 구현은 본 가이드를 기준으로 작성합니다.

---

## 📌 목적

- 디자인 스타일을 코드 전반에서 **일관되게 유지**
- 컬러 / spacing / radius 하드코딩 방지
- 디자인 변경 시 토큰만 수정하여 유지보수 비용 최소화
- 팀원 간 스타일 사용 방식 통일

---

## 🧱 토큰 구조

디자인 토큰은 2단계 레이어 구조로 구성됩니다.

Primitive Token (디자인 원본 값)  
↓  
Semantic Token (의미 기반 별칭)  
↓  
Tailwind Class (실제 사용 API)

---

## ✅ Primitive Token

실제 색상값, 폰트, 사이즈 등 디자인 원본 값입니다.  
직접 사용하지 않습니다.

예시

```
--color-main-violet: #8b5cf6;
--color-background: #222222;
--radius-lg: 20px;
```

---

## ✅ Semantic Token

UI에서 사용하는 의미 기반 토큰 레이어입니다.
Primitive Token을 매핑하여 사용합니다.

예시

```
--color-primary: var(--color-main-violet);
--color-surface-default: var(--color-background);
--radius-card: var(--radius-lg);
```

---

## 🎨 Tailwind 사용 규칙

프로젝트에서는 Tailwind class만 사용합니다.
CSS Variable(var(--xxx)) 직접 사용은 금지합니다.

### ✅ Color

```
bg-primary
bg-surface
bg-surface-elevated

text-text-primary
text-text-secondary

border-border
border-border-strong
```

---

### ✅ Spacing

```
p-mobile
px-tablet
gap-desktop
```

---

### ✅ Radius

```
rounded-sm   // control
rounded-lg   // card
```

---

### ✅ Layout

```
max-w-container mx-auto
```

---

### ✅ Typography

```
font-base
text-heading
text-caption
```

---

### ✅ Shadow

```
shadow-inactive
hover:shadow-active
```

---

## ❌ 금지 규칙

아래 사용 방식은 절대 금지합니다.

```
// ❌ 하드코딩 색상
<div className="bg-[#222222]" />

// ❌ inline style
<div style={{ padding: '32px' }} />

// ❌ CSS Variable 직접 접근
<div style={{ background: 'var(--color-primary)' }} />
```

---

## ✅ 권장 패턴 예시

```
<Card className="bg-surface-elevated border border-border rounded-lg p-tablet shadow-inactive">
  <h2 className="text-heading text-text-primary">제목</h2>
  <p className="text-caption text-text-secondary">설명</p>
</Card>

```

---

## 🛠️ 디자인 수정 시 규칙

- 색상 변경 → token.css 수정

- 컴포넌트 수정 ❌

- Tailwind class 직접 수정 ❌

> #### 디자인 변경은 반드시 토큰 레벨에서 처리합니다.

---

## 📎 참고

- 토큰 정의 파일: /styles/token.css

- Tailwind 매핑: /tailwind.config.ts
