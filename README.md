# Bridge H 웹사이트 - Vercel 배포 가이드

## 📁 파일 구조
```
/
├── index.html    ← 메인 홈페이지
└── README.md     ← 이 파일
```

---

## 🚀 Vercel 배포 방법

### 방법 1: GitHub 연동 (추천)

1. **GitHub 레포지토리 생성**
   - GitHub.com → New Repository
   - 이름: `bridgeh-website`

2. **파일 업로드**
   - `index.html` 파일을 레포에 업로드

3. **Vercel 연동**
   - [vercel.com](https://vercel.com) 가입/로그인
   - "New Project" 클릭
   - GitHub 레포 선택 → Import
   - "Deploy" 클릭

4. **커스텀 도메인 연결**
   - Vercel 대시보드 → Settings → Domains
   - `bridgeh.co.kr` 입력
   - DNS 설정 안내에 따라 네임서버 변경

### 방법 2: Vercel CLI (터미널)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포 (이 폴더에서 실행)
vercel

# 프로덕션 배포
vercel --prod
```

---

## 📧 문의 폼 설정 (Formspree)

현재 문의 폼은 **Formspree** 연동 준비가 되어 있습니다.

### 설정 방법:

1. [formspree.io](https://formspree.io) 가입
2. "New Form" 생성
3. Form ID 복사 (예: `xyzabcde`)
4. `index.html`에서 아래 부분 수정:

```html
<!-- 변경 전 -->
action="https://formspree.io/f/YOUR_FORM_ID"

<!-- 변경 후 (본인 ID로) -->
action="https://formspree.io/f/xyzabcde"
```

5. 저장 후 재배포

### 문의 알림:
- 문의가 오면 Formspree 가입 이메일로 알림
- Formspree 대시보드에서 모든 문의 확인 가능

---

## 🔧 수정이 필요한 부분

| 항목 | 현재 값 | 위치 |
|------|---------|------|
| Formspree ID | `YOUR_FORM_ID` | form action 속성 |
| 이메일 | `contact@bridgeh.co.kr` | 푸터 |

---

## 📝 업데이트 방법

1. `index.html` 수정
2. GitHub에 push (또는 Vercel에 재업로드)
3. 자동 배포됨

---

## ❓ 문제 해결

**로고가 안 보여요**
→ 로고는 base64로 HTML에 내장되어 있어 별도 파일 불필요

**문의 폼이 작동 안 해요**
→ Formspree ID가 `YOUR_FORM_ID`인지 확인, 본인 ID로 교체

**도메인 연결이 안 돼요**
→ DNS 전파에 최대 48시간 소요될 수 있음

---

© 2026 Bridge H. All Rights Reserved.
