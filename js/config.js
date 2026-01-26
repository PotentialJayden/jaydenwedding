// 모바일 청첩장 설정 파일
// 이 파일만 수정하면 청첩장의 모든 정보를 변경할 수 있습니다.

const weddingConfig = {
  // 신랑 정보
  groom: {
    name: "정지성",
    firstName: "지성",
    father: "정○○",
    mother: "○○○",
    account: {
      bank: "카카오뱅크",
      number: "3333-01-1234567",
      holder: "정지성"
    }
  },

  // 신부 정보
  bride: {
    name: "전유진",
    firstName: "유진",
    father: "전○○",
    mother: "○○○",
    account: {
      bank: "카카오뱅크",
      number: "3333-01-7654321",
      holder: "전유진"
    }
  },

  // 예식 정보
  wedding: {
    date: "2026-03-15T14:00:00", // ISO 8601 형식
    dateString: "2026년 3월 15일 토요일",
    time: "오후 2시",
    venue: {
      name: "그랜드 웨딩홀",
      address: "서울시 강남구 테헤란로 123",
      floor: "3층 그랜드 볼룸",
      tel: "02-1234-5678",
      parking: "지하 1~3층 주차 가능 (3시간 무료)"
    }
  },

  // 인사말
  message: {
    main: "저희 두 사람이\n사랑으로 하나 되는 소중한 날을\n함께해 주시면 큰 기쁨이 되겠습니다.",
    sub: "바쁘신 중에도 참석해 주셔서 감사합니다."
  },

  // 갤러리 이미지 (경로 배열)
  gallery: [
    "images/gallery/photo1.jpg",
    "images/gallery/photo2.jpg",
    "images/gallery/photo3.jpg",
    "images/gallery/photo4.jpg",
    "images/gallery/photo5.jpg",
    "images/gallery/photo6.jpg",
    "images/gallery/photo7.jpg",
    "images/gallery/photo8.jpg",
    "images/gallery/photo9.jpg",
    "images/gallery/photo10.jpg",
    "images/gallery/photo11.jpg",
    "images/gallery/photo12.jpg",
    "images/gallery/photo13.jpg",
    "images/gallery/photo14.jpg",
    "images/gallery/photo15.jpg",
    "images/gallery/photo16.jpg",
    "images/gallery/photo17.jpg",
    "images/gallery/photo18.jpg",
    "images/gallery/photo19.jpg",
    "images/gallery/photo20.jpg",
    "images/gallery/photo21.jpg",
    "images/gallery/photo22.jpg",
    "images/gallery/photo23.jpg",
    "images/gallery/photo24.jpg",
    "images/gallery/photo25.jpg",
    "images/gallery/photo26.jpg",
    "images/gallery/photo27.jpg",
    "images/gallery/photo28.jpg"
  ],

  // 카카오맵 설정
  kakaoMap: {
    // 카카오 디벨로퍼스에서 발급받은 JavaScript 키를 입력하세요
    // https://developers.kakao.com/ 에서 앱 생성 후 키 발급
    appKey: "9405f0ae72c7775005cbfb5905b8b352",

    // 웨딩홀 위치 (위도, 경도)
    // 카카오맵에서 장소 검색 후 좌표를 복사하거나
    // https://www.google.com/maps 에서 우클릭 > 좌표 복사
    lat: 37.5665,  // 위도
    lng: 126.9780, // 경도

    // 지도 설정
    level: 3, // 지도 확대 레벨 (1~14, 작을수록 확대)
    markerText: "그랜드 웨딩홀" // 마커에 표시될 텍스트
  },

  // 카카오톡 공유하기 설정
  kakaoShare: {
    // 카카오 디벨로퍼스에서 발급받은 JavaScript 키 (kakaoMap.appKey와 동일)
    appKey: "9405f0ae72c7775005cbfb5905b8b352",

    // 공유 메시지 설정
    title: "정지성 ♥ 전유진 결혼합니다",
    description: "2026년 3월 15일 토요일 오후 2시\n그랜드 웨딩홀",
    imageUrl: "https://your-domain.com/images/share-thumbnail.jpg", // 공유 썸네일 이미지 (필수: HTTPS)

    // 모바일 청첩장 링크
    mobileWebUrl: "https://your-domain.com/template-modern.html", // 모바일에서 열릴 URL
    webUrl: "https://your-domain.com/template-modern.html" // PC에서 열릴 URL
  },

  // Open Graph 메타태그 설정 (카카오톡, 페이스북 등 자동 썸네일)
  og: {
    title: "정지성 ♥ 전유진 결혼합니다",
    description: "2026년 3월 15일 토요일 오후 2시 | 그랜드 웨딩홀",
    image: "https://your-domain.com/images/og-image.jpg", // OG 이미지 (1200x630 권장)
    url: "https://your-domain.com" // 사이트 URL
  },

  // CTA(Call-to-Action) 버튼 설정
  cta: {
    enabled: true, // CTA 버튼 표시 여부
    buttons: [
      {
        text: "📱 카톡 공유",
        action: "kakao-share", // 특수 액션: 카카오톡 공유
        style: "primary" // primary, secondary
      },
      {
        text: "📍 카카오내비",
        action: "kakao-navi",
        style: "secondary"
      },
      {
        text: "🗺️ 티맵",
        action: "tmap-navi",
        style: "secondary"
      },
      {
        text: "📞 전화하기",
        action: "tel:02-1234-5678",
        style: "secondary"
      }
    ]
  },

  // 축의금 계좌 표시 옵션
  account: {
    showKakaoPay: true, // 카카오페이 송금 버튼 표시 여부
    kakaoPayUrl: "https://qr.kakaopay.com/YOUR_KAKAO_PAY_QR_CODE" // 카카오페이 송금 QR 코드 URL (선택사항)
  },

  // 기타 설정
  settings: {
    showDday: true, // D-Day 카운터 표시 여부
    showParents: true, // 부모님 성함 표시 여부
    showTel: true, // 웨딩홀 전화번호 표시 여부
    enableGalleryModal: true, // 갤러리 모달 활성화
    enableLazyLoad: true, // 이미지 레이지 로딩 활성화
    smoothScroll: true // 스무스 스크롤 활성화
  }
};

// 설정 객체를 전역으로 노출
window.weddingConfig = weddingConfig;
