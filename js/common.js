// 모바일 청첩장 공통 기능
// 카카오맵, 카카오톡 공유, 갤러리, 클립보드 복사 등

// ===================================
// 1. 초기화
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  initKakao();
  initMap();
  initGallery();
  initClipboard();
  initCTA();
  initDday();
  initAnimations();
});

// ===================================
// 2. 카카오 SDK 초기화
// ===================================

function initKakao() {
  const { kakaoShare } = window.weddingConfig;

  if (!kakaoShare || !kakaoShare.appKey) {
    console.warn('카카오 appKey가 설정되지 않았습니다.');
    return;
  }

  if (typeof Kakao !== 'undefined' && !Kakao.isInitialized()) {
    Kakao.init(kakaoShare.appKey);
    console.log('Kakao SDK 초기화 완료');
  }
}

// ===================================
// 3. 카카오맵 초기화
// ===================================

function initMap() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;

  const { kakaoMap } = window.weddingConfig;

  if (!window.kakao || !window.kakao.maps) {
    console.error('카카오맵 API가 로드되지 않았습니다.');
    return;
  }

  const mapOption = {
    center: new kakao.maps.LatLng(kakaoMap.lat, kakaoMap.lng),
    level: kakaoMap.level || 3
  };

  const map = new kakao.maps.Map(mapContainer, mapOption);

  // 마커 생성
  const markerPosition = new kakao.maps.LatLng(kakaoMap.lat, kakaoMap.lng);
  const marker = new kakao.maps.Marker({
    position: markerPosition
  });
  marker.setMap(map);

  // 인포윈도우 (선택사항)
  const infowindow = new kakao.maps.InfoWindow({
    content: `<div style="padding:5px;font-size:12px;">${kakaoMap.markerText}</div>`
  });
  infowindow.open(map, marker);
}

// ===================================
// 4. 갤러리 기능
// ===================================

function initGallery() {
  const galleryImages = document.querySelectorAll('.gallery-item img');
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.querySelector('.modal-nav.prev');
  const nextBtn = document.querySelector('.modal-nav.next');

  if (!modal || !modalImg) return;

  let currentIndex = 0;
  const images = Array.from(galleryImages);

  // 이미지 클릭 시 모달 열기
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      openModal();
    });
  });

  function openModal() {
    modal.classList.add('active');
    modalImg.src = images[currentIndex].src;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 닫기 버튼
  closeBtn?.addEventListener('click', closeModal);

  // 모달 배경 클릭 시 닫기
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // 이전/다음 버튼
  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
  });

  // 키보드 네비게이션
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentIndex].src;
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex].src;
    }
  });
}

// ===================================
// 5. 클립보드 복사 기능
// ===================================

function initClipboard() {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.dataset.copy;

      try {
        await navigator.clipboard.writeText(text);
        showToast('계좌번호가 복사되었습니다');
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('계좌번호가 복사되었습니다');
      }
    });
  });
}

// ===================================
// 6. 토스트 알림
// ===================================

function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, duration);
}

// ===================================
// 7. CTA 버튼 기능
// ===================================

function initCTA() {
  const { cta, kakaoShare, kakaoMap, wedding } = window.weddingConfig;

  if (!cta || !cta.enabled) return;

  const ctaContainer = document.getElementById('cta-container');
  if (!ctaContainer) return;

  cta.buttons.forEach(btnConfig => {
    const button = document.createElement('button');
    button.className = `btn btn-${btnConfig.style}`;
    button.textContent = btnConfig.text;

    button.addEventListener('click', () => {
      handleCTAAction(btnConfig.action);
    });

    ctaContainer.appendChild(button);
  });

  function handleCTAAction(action) {
    switch (action) {
      case 'kakao-share':
        shareKakao();
        break;
      case 'kakao-navi':
        openKakaoNavi();
        break;
      case 'tmap-navi':
        openTmapNavi();
        break;
      default:
        if (action.startsWith('tel:')) {
          window.location.href = action;
        } else if (action.startsWith('http')) {
          window.open(action, '_blank');
        }
    }
  }

  function shareKakao() {
    if (!Kakao.isInitialized()) {
      alert('카카오 SDK가 초기화되지 않았습니다.');
      return;
    }

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: kakaoShare.title,
        description: kakaoShare.description,
        imageUrl: kakaoShare.imageUrl,
        link: {
          mobileWebUrl: kakaoShare.mobileWebUrl,
          webUrl: kakaoShare.webUrl
        }
      },
      buttons: [
        {
          title: '모바일 청첩장 보기',
          link: {
            mobileWebUrl: kakaoShare.mobileWebUrl,
            webUrl: kakaoShare.webUrl
          }
        }
      ]
    });
  }

  function openKakaoNavi() {
    const { lat, lng } = kakaoMap;
    const { name } = wedding.venue;
    const url = `kakaomap://route?ep=${lat},${lng}&by=CAR`;
    window.location.href = url;

    // 앱이 없을 경우 웹으로 fallback
    setTimeout(() => {
      window.open(`https://map.kakao.com/link/to/${name},${lat},${lng}`, '_blank');
    }, 1500);
  }

  function openTmapNavi() {
    const { lat, lng } = kakaoMap;
    const { name } = wedding.venue;
    const url = `tmap://route?goalname=${encodeURIComponent(name)}&goalx=${lng}&goaly=${lat}`;
    window.location.href = url;

    // 앱이 없을 경우 웹으로 fallback
    setTimeout(() => {
      window.open(`https://tmap.life/`, '_blank');
    }, 1500);
  }
}

// ===================================
// 8. D-Day 카운터
// ===================================

function initDday() {
  const ddayElement = document.getElementById('dday');
  if (!ddayElement) return;

  const { wedding } = window.weddingConfig;
  const weddingDate = new Date(wedding.date);
  const today = new Date();
  const diffTime = weddingDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    ddayElement.textContent = `D - ${diffDays}`;
  } else if (diffDays === 0) {
    ddayElement.textContent = 'D-Day';
  } else {
    ddayElement.textContent = `D + ${Math.abs(diffDays)}`;
  }
}

// ===================================
// 9. 스크롤 애니메이션
// ===================================

function initAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));

  // 스무스 스크롤 활성화
  if (window.weddingConfig.settings.smoothScroll) {
    document.documentElement.classList.add('smooth-scroll');
  }
}

// ===================================
// 10. 유틸리티 함수
// ===================================

// 아코디언 토글
function toggleAccordion(element) {
  const content = element.nextElementSibling;
  const isOpen = content.classList.contains('open');

  // 모든 아코디언 닫기
  document.querySelectorAll('.accordion-content').forEach(item => {
    item.classList.remove('open');
  });

  if (!isOpen) {
    content.classList.add('open');
  }
}

// 전역 함수로 노출
window.toggleAccordion = toggleAccordion;
window.showToast = showToast;
