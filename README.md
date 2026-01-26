# 🎉 모바일 청첩장 프로젝트

순수 HTML/CSS/JavaScript로 제작된 반응형 모바일 청첩장입니다.

## ✨ 주요 기능

### 1. 5가지 스타일 템플릿
- **템플릿 1: 모던/미니멀** - 세련되고 깔끔한 디자인 ✅ **완성**
- **템플릿 2: 감성/로맨틱** - 파스텔 톤의 따뜻한 느낌 ✅ **완성**
- **템플릿 3: 클래식 엘레강스** - 네이비/골드의 격식있는 스타일 ✅ **완성**
- **템플릿 4: 보타니컬** - 자연스러운 그린 계열 ✅ **완성**
- **템플릿 5: 비치/서머** - 산뜻한 블루 톤 ✅ **완성**

### 2. 핵심 기능
- ✅ **카카오톡 공유하기** - 썸네일과 함께 청첩장 공유
- ✅ **CTA 버튼** - 하단 고정 버튼 (공유하기, 길찾기, 전화하기)
- ✅ **카카오맵 연동** - 지도 표시 및 길찾기 (카카오내비/티맵)
- ✅ **갤러리** - 수평 스크롤, 이미지 모달, 레이지 로딩
- ✅ **계좌번호 복사** - 클립보드 API로 간편 복사
- ✅ **D-Day 카운터** - 자동 계산
- ✅ **Open Graph** - 카카오톡/페이스북 자동 썸네일

## 🚀 빠른 시작

### 1. 파일 구조

```
wedding-invitation/
├── index.html                 # 템플릿 선택 페이지 ✅
├── template-modern.html       # 모던 템플릿 ✅
├── template-romantic.html     # 로맨틱 템플릿 ✅
├── template-classic.html      # 클래식 템플릿 ✅
├── template-botanical.html    # 보타니컬 템플릿 ✅
├── template-beach.html        # 비치 템플릿 ✅
├── css/
│   ├── common.css            # 공통 스타일 ✅
│   ├── modern.css            # 모던 스타일 ✅
│   ├── romantic.css          # 로맨틱 스타일 ✅
│   ├── classic.css           # 클래식 스타일 ✅
│   ├── botanical.css         # 보타니컬 스타일 ✅
│   └── beach.css             # 비치 스타일 ✅
├── js/
│   ├── config.js             # 설정 파일 ✅
│   └── common.js             # 공통 기능 ✅
├── images/
│   └── sample/               # 갤러리 이미지 (직접 추가 필요)
└── README.md                 # 이 파일
```

### 2. 기본 설정 (config.js)

`js/config.js` 파일에서 청첩장 정보를 수정하세요:

```javascript
const weddingConfig = {
  groom: {
    name: "신랑 이름",
    father: "아버지 성함",
    mother: "어머니 성함",
    account: {
      bank: "은행명",
      number: "계좌번호",
      holder: "예금주"
    }
  },
  bride: {
    name: "신부 이름",
    // ... (동일한 구조)
  },
  wedding: {
    date: "2026-03-15T14:00:00",
    venue: {
      name: "웨딩홀 이름",
      address: "주소",
      // ...
    }
  },
  // ... 기타 설정
};
```

### 3. 갤러리 이미지 추가

1. `images/sample/` 폴더에 사진 추가
2. `config.js`의 `gallery` 배열에 경로 입력:

```javascript
gallery: [
  "images/sample/photo1.jpg",
  "images/sample/photo2.jpg",
  // ...
]
```

**권장 이미지 사양:**
- 크기: 1200px width (모바일 최적화)
- 포맷: WebP 권장, JPG 호환
- 개수: 최소 6장, 최대 20장

### 4. 카카오 API 설정 ✅

**이미 설정 완료!** 현재 등록된 키:
- JavaScript 키: `9405f0ae72c7775005cbfb5905b8b352`

카카오 디벨로퍼스에서 **플랫폼 설정**을 해야 합니다:

1. [카카오 디벨로퍼스](https://developers.kakao.com/) 로그인
2. 내 애플리케이션 > 앱 선택
3. **플랫폼** 탭에서 **Web 플랫폼 추가**
4. 사이트 도메인 등록:
   - 로컬 테스트: `http://localhost`
   - 배포 후: `https://your-domain.com`

### 5. 지도 좌표 설정

웨딩홀 위치의 위도/경도를 `config.js`에 입력하세요:

```javascript
kakaoMap: {
  lat: 37.5665,  // 위도
  lng: 126.9780, // 경도
}
```

**좌표 찾는 방법:**
1. [카카오맵](https://map.kakao.com/)에서 장소 검색
2. 우클릭 > "URL 복사" 후 주소창의 `?map=` 뒤 좌표 확인
3. 또는 [Google Maps](https://www.google.com/maps)에서 우클릭 > 좌표 복사

### 6. 카카오톡 공유 썸네일 설정

`config.js`에서 공유 이미지 URL을 설정하세요:

```javascript
kakaoShare: {
  imageUrl: "https://your-domain.com/images/share-thumbnail.jpg", // HTTPS 필수!
  mobileWebUrl: "https://your-domain.com/template-modern.html",
  webUrl: "https://your-domain.com/template-modern.html"
}
```

**주의사항:**
- 이미지는 반드시 **HTTPS** 프로토콜이어야 합니다
- 권장 크기: 800x800px 이상
- 배포 후 실제 URL로 변경 필요

## 💻 로컬 테스트

### 방법 1: Live Server (VS Code)
1. VS Code에서 `Live Server` 확장 설치
2. `template-modern.html` 우클릭 > "Open with Live Server"
3. 브라우저에서 `http://localhost:5500/template-modern.html` 열림

### 방법 2: Python 서버
```bash
cd wedding-invitation
python3 -m http.server 8000
```
브라우저에서 `http://localhost:8000/template-modern.html` 접속

### 방법 3: Node.js 서버
```bash
npx http-server -p 8000
```

## 📱 배포하기

### GitHub Pages (무료, 추천)
1. GitHub 저장소 생성
2. 프로젝트 업로드
3. Settings > Pages > Source: `main` 브랜치 선택
4. `https://username.github.io/repository-name/` 에서 확인

### Netlify (무료, 드래그 앤 드롭)
1. [Netlify](https://netlify.com) 접속
2. `wedding-invitation` 폴더를 드래그 앤 드롭
3. 자동으로 URL 발급 (`https://random-name.netlify.app`)
4. 커스텀 도메인 설정 가능

### Vercel (무료, Git 연동)
1. [Vercel](https://vercel.com) 접속
2. GitHub 저장소 연결
3. 자동 배포 및 URL 발급

**배포 후 필수 작업:**
1. `config.js`의 `kakaoShare`, `og` URL을 실제 도메인으로 변경
2. 카카오 디벨로퍼스에 배포 도메인 등록

## 🎨 커스터마이징

### 색상 변경 (CSS 변수)

각 템플릿의 CSS 파일에서 색상을 수정할 수 있습니다:

```css
/* css/modern.css */
:root {
  --modern-bg-primary: #FFFFFF;      /* 배경색 */
  --modern-text-primary: #1A1A1A;    /* 텍스트 색 */
  --modern-accent: #2C2C2C;          /* 포인트 색 */
}
```

### 섹션 순서 변경

`template-modern.html`에서 `<section>` 태그 순서를 변경하면 됩니다.

### 기능 끄기/켜기

`config.js`의 `settings`에서 기능을 제어할 수 있습니다:

```javascript
settings: {
  showDday: true,           // D-Day 표시
  showParents: true,        // 부모님 성함 표시
  showTel: true,            // 전화번호 표시
  enableGalleryModal: true, // 갤러리 모달
  smoothScroll: true        // 스무스 스크롤
}
```

## 🔧 문제 해결

### 1. 카카오맵이 안 보여요
- 카카오 디벨로퍼스에서 **Web 플랫폼**을 등록했는지 확인
- `config.js`의 `kakaoMap.appKey`가 올바른지 확인
- 브라우저 콘솔(F12)에서 에러 메시지 확인

### 2. 카카오톡 공유가 안 돼요
- 카카오 SDK 초기화가 되었는지 확인 (콘솔에 "Kakao SDK 초기화 완료" 메시지)
- `kakaoShare.imageUrl`이 **HTTPS**인지 확인
- 로컬에서는 공유가 제대로 안 될 수 있음 (배포 후 테스트)

### 3. 이미지가 안 보여요
- 이미지 경로가 올바른지 확인 (`images/sample/photo1.jpg`)
- 파일 이름의 대소문자 확인 (Linux는 대소문자 구분)
- 브라우저 개발자 도구(F12) > Network 탭에서 404 에러 확인

### 4. 모바일에서 레이아웃이 깨져요
- `viewport` 메타태그가 있는지 확인
- 브라우저 개발자 도구에서 모바일 모드로 테스트
- CSS 미디어 쿼리가 적용되는지 확인

## ✅ 완성된 템플릿

**모든 템플릿이 완성되었습니다!**

완성된 템플릿:
- [x] 템플릿 1: 모던/미니멀
- [x] 템플릿 2: 감성/로맨틱
- [x] 템플릿 3: 클래식 엘레강스
- [x] 템플릿 4: 보타니컬
- [x] 템플릿 5: 비치/서머
- [x] `index.html` - 템플릿 선택 페이지

`index.html`을 열어서 5가지 템플릿을 모두 둘러보세요!

## 📞 지원

문제가 발생하면 아래 정보를 포함하여 문의하세요:
- 브라우저 종류 및 버전
- 에러 메시지 (브라우저 콘솔 F12)
- 스크린샷

## 📜 라이선스

MIT License - 자유롭게 사용 및 수정 가능합니다.

---

**Made with ♥ by Claude Code**
