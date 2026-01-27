/**
 * 청첩장 설정 파일
 * 이 파일만 수정하면 모든 내용이 자동으로 반영됩니다.
 */

const CONFIG = {
  // ===== API 키 =====
  api: {
    kakaoMapKey: "9405f0ae72c7775005cbfb5905b8b352"
  },

  // ===== 기본 정보 =====
  meta: {
    title: "지성 ♡ 유진 결혼합니다",
    description: "2026년 3월 28일 토요일 오전 10시 30분",
    ogImage: "images/cover/cover-1.jpg"
  },

  // ===== 커버 섹션 =====
  cover: {
    // 배경 이미지 (필름 스타일 2장)
    images: [
      "images/cover/cover-1.jpg",
      "images/cover/cover-2.jpg"
    ],
    // 날짜 표시 (우측 상단)
    date: {
      dayOfWeek: "Sat",
      time: "10:30",
      ampm: "AM"
    },
    // 날짜 (우측 하단)
    sideDate: {
      month: "Mar",
      day: "28,",
      year: "2026"
    },
    // 하단 텍스트
    bottomText: {
      line1: "우리 결혼합니다",
      line2: "지성 ♥ 유진"
    }
  },

  // ===== 인사말 섹션 =====
  greeting: {
    // 시/명언 인용
    quote: {
      lines: [
        "사람이 온다는 건 실은 어마어마한 일이다.",
        "그는 그의 과거와 현재와 그리고",
        "그의 미래와 함께 오기 때문이다.",
        "한 사람의 일생이 오기 때문이다."
      ],
      author: "- 정현종, '방문객'"
    },
    // 초대 메시지
    message: [
      "저희 두 사람이 함께하는 새로운 시작에",
      "귀한 발걸음으로 축복해 주시면 감사하겠습니다."
    ],
    // 신랑/신부 표시
    coupleIntro: "신랑 정지성 · 신부 전유진"
  },

  // ===== 웨딩 날짜 섹션 =====
  weddingDate: {
    title: "WEDDING DAY",
    date: "2026년 3월 28일 토요일 | 오전 10시 30분",
    dateEn: "Saturday, March 28, 2026 | AM 10:30",
    // D-day 계산용
    targetDate: "2026-03-28T10:30:00",
    // 달력 표시
    calendar: {
      year: 2026,
      month: 3,  // 3월
      day: 28    // 결혼식 날짜
    }
  },

  // ===== 신랑/신부 정보 =====
  couple: {
    groom: {
      role: "신랑",
      name: "지성",
      nameEn: "JISUNG",
      fullName: "정지성",
      phone: "010-9940-9879",
      father: {
        name: "정봉수",
        relation: "아버지",
        phone: "010-2034-8863"
      },
      mother: {
        name: "김선옥",
        relation: "어머니",
        phone: "010-4150-7013"
      },
      birthOrder: "아들"
    },
    bride: {
      role: "신부",
      name: "유진",
      nameEn: "YUJIN",
      fullName: "전유진",
      phone: "010-8354-4038",
      father: {
        name: "故 전병석",
        relation: "아버지",
        phone: ""
      },
      mother: null,
      birthOrder: "딸"
    },
    // 축하 연락 버튼 텍스트
    contactButtonText: "축하 연락하기"
  },

  // ===== About Us 섹션 =====
  aboutUs: {
    title: "ABOUT US",
    subtitle: "저희 커플을 소개합니다",
    description: "하나로 이어진 두개의 우주",
    // 프로필 이미지
    groomImage: "images/profile/profile-groom.png",
    brideImage: "images/profile/profile-bride.png"
  },

  // ===== 타임라인 섹션 =====
  timeline: {
    title: "OUR TIMELINE",
    subtitle: "저희 연애의 타임라인입니다",
    description: "서로에게 참 소중하고 감사한 존재",
    events: [
      {
        date: "22년 3월, 서울",
        emoji: "☕️",
        title: "운명 같은 첫 인연",
        description: "서로 애정하던 카페에서\n첫눈에 반한 우리",
        image: "images/timeline/timline-1.png"
      },
      {
        date: "연애 기간 1,280일",
        emoji: "💕",
        title: "행복했던 3년 반",
        description: "항상 대화와 웃음이 머물던\n여러 계절들의 우리",
        image: "images/timeline/timline-2.png"
      },
      {
        date: "첫 데이트 장소에서",
        emoji: "💍",
        title: "프로포즈",
        description: "준비는 오래, 대답은 짧게.\n\"YES!\"",
        image: "images/timeline/timline-3.png"
      },
      {
        date: "25년 9월 20일, 제주",
        emoji: "👰‍♀️🤵",
        title: "웨딩데이",
        description: "이제는 둘이 아닌\n하나로 걷기 시작하는 날",
        image: "images/timeline/timline-4.png"
      }
    ]
  },

  // ===== 갤러리 섹션 =====
  gallery: {
    title: "GALLERY",
    subtitle: "사진을 클릭하시면 전체 화면 보기가 가능합니다",
    // 갤러리 이미지 목록
    images: [
      "images/gallery/gallery-1.jpg",
      "images/gallery/gallery-2.jpg",
      "images/gallery/gallery-3.jpg",
      "images/gallery/gallery-4.jpg",
      "images/gallery/gallery-5.jpg",
      "images/gallery/gallery-6.jpg",
      "images/gallery/gallery-7.jpg",
      "images/gallery/gallery-8.jpg",
      "images/gallery/gallery-9.jpg",
      "images/gallery/gallery-10.jpg",
      "images/gallery/gallery-11.jpg",
      "images/gallery/gallery-12.jpg",
      "images/gallery/gallery-13.jpg",
      "images/gallery/gallery-14.jpg",
      "images/gallery/gallery-15.jpg",
      "images/gallery/gallery-16.jpg",
      "images/gallery/gallery-17.jpg",
      "images/gallery/gallery-18.jpg",
      "images/gallery/gallery-19.jpg",
      "images/gallery/gallery-20.jpg",
      "images/gallery/gallery-21.jpg",
      "images/gallery/gallery-22.jpg",
      "images/gallery/gallery-23.jpg",
      "images/gallery/gallery-24.jpg",
      "images/gallery/gallery-25.jpg",
      "images/gallery/gallery-26.jpg",
      "images/gallery/gallery-27.jpg",
      "images/gallery/gallery-28.jpg"
    ]
  },

  // ===== 오시는 길 섹션 =====
  location: {
    title: "LOCATION",
    venue: {
      name: "웨스턴팰리스 웨딩하우스",
      hall: "팰리스홀 6층",
      address: "인천광역시 부평구 부평대로 278번길 16",
      tel: "032-524-5000"
    },
    // 네이버/카카오 지도 좌표
    coordinates: {
      lat: 37.5082,
      lng: 126.7226
    },
    // 길안내
    directions: {
      car: {
        title: "자차",
        content: [
          "내비게이션 : '웨스턴팰리스웨딩홀' 검색",
          "주차장 1,500대 수용 가능"
        ]
      },
      bus: {
        title: "버스",
        routes: [
          {
            number: "갈산역 방면 버스",
            description: "갈산역 하차 → 2번 출구 → 도보 1분"
          }
        ]
      },
      subway: {
        title: "지하철",
        lines: [
          {
            line: "인천 1호선",
            station: "갈산역 2번 출구",
            description: "도보 1분"
          }
        ]
      }
    },
    // 지도 링크
    mapLinks: {
      kakao: "https://map.kakao.com/link/to/웨스턴팰리스웨딩하우스,37.5082,126.7226",
      naver: "https://map.naver.com/v5/search/웨스턴팰리스웨딩"
    }
  },

  // ===== 계좌번호 섹션 =====
  account: {
    title: "마음 전하실 곳",
    subtitle: "축하의 마음을 전해주세요",
    groom: {
      title: "신랑측 계좌번호",
      accounts: [
        {
          name: "정봉수",
          relation: "아버지",
          bank: "신한은행",
          number: "110-123-456789"
        },
        {
          name: "정지성",
          relation: "신랑",
          bank: "카카오뱅크",
          number: "3333-01-1234567"
        }
      ]
    },
    bride: {
      title: "신부측 계좌번호",
      accounts: [
        {
          name: "전유진",
          relation: "신부",
          bank: "토스뱅크",
          number: "1000-1234-5678"
        }
      ]
    }
  },

  // ===== 식사 안내 섹션 =====
  reception: {
    title: "RECEPTION",
    subtitle: "식사 안내",
    image: "images/reception.jpg",
    description: "피로연은 본식 후 같은 층에서 진행됩니다.\n참석 인원 파악을 위해 참석 여부를 알려주시면 감사하겠습니다."
  },

  // ===== 화환 안내 =====
  flower: {
    enabled: true,
    title: "화환 안내",
    message: "화환 대신 축하의 마음을 담아주세요.\n감사한 마음으로 소중히 간직하겠습니다."
  },

  // ===== 방명록/축하 메시지 =====
  guestbook: {
    enabled: true,
    title: "축하 메시지",
    subtitle: "따뜻한 한마디를 남겨주세요"
  },

  // ===== 공유하기 =====
  share: {
    kakao: {
      enabled: true,
      templateId: "YOUR_KAKAO_TEMPLATE_ID"
    },
    copyLink: {
      enabled: true,
      text: "청첩장 링크 복사하기"
    }
  },

  // ===== 엔딩 섹션 =====
  ending: {
    image: "images/ending.jpg",
    message: "감사합니다"
  },

  // ===== 푸터 =====
  footer: {
    copyright: "© 2026 지성 ♡ 유진",
    poweredBy: "Made with love"
  },

  // ===== 스타일 설정 =====
  style: {
    // 메인 색상
    primaryColor: "#D4A574",
    // 배경 색상
    backgroundColor: "#FAFAFA",
    // 텍스트 색상
    textColor: "#111111",
    // 폰트
    fontFamily: "'Noto Serif KR', serif"
  }
};

// 설정 내보내기
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
