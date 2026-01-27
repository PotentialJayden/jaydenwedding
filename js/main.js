/**
 * 모바일 청첩장 메인 스크립트
 * config.js의 설정을 읽어와 HTML에 적용합니다.
 */

document.addEventListener('DOMContentLoaded', function() {
    // CONFIG가 로드되었는지 확인
    if (typeof CONFIG === 'undefined') {
        console.error('CONFIG가 로드되지 않았습니다. config.js를 확인하세요.');
        return;
    }

    // 각 섹션 초기화
    initMeta();
    initCover();
    initGreeting();
    initWeddingDate();
    initCouple();
    initGallery();
    initLocation();
    initAccount();
    initFlower();
    initShare();
    initEnding();
    initFooter();
    initAnimations();
});

/**
 * 메타 정보 설정
 * 주의: OG 태그는 크롤러가 JS를 실행하지 않으므로 index.html에 하드코딩되어 있음
 * 이 함수는 document.title만 업데이트
 */
function initMeta() {
    const { meta } = CONFIG;
    // document.title 업데이트 (런타임에서만 적용)
    if (meta.title) {
        document.title = meta.title;
    }
}

/**
 * 커버 섹션 초기화
 */
function initCover() {
    const { cover } = CONFIG;

    // 커버 이미지
    if (cover.images[0]) {
        document.getElementById('cover-img-1').src = cover.images[0];
    }
    if (cover.images[1]) {
        document.getElementById('cover-img-2').src = cover.images[1];
    }

    // 상단 날짜 정보
    document.getElementById('cover-day').textContent = cover.date.dayOfWeek;
    document.getElementById('cover-time').textContent = cover.date.time;
    document.getElementById('cover-ampm').textContent = cover.date.ampm;

    // 우측 날짜
    document.getElementById('cover-month').textContent = cover.sideDate.month;
    document.getElementById('cover-date').textContent = cover.sideDate.day;
    document.getElementById('cover-year').textContent = cover.sideDate.year;

    // 하단 텍스트
    if (cover.bottomText) {
        document.getElementById('cover-bottom-line1').textContent = cover.bottomText.line1;
        document.getElementById('cover-bottom-line2').textContent = cover.bottomText.line2;
    }
}

/**
 * 인사말 섹션 초기화
 */
function initGreeting() {
    const { greeting } = CONFIG;

    // 인용문
    const quoteLinesContainer = document.getElementById('quote-lines');
    greeting.quote.lines.forEach(line => {
        const p = document.createElement('p');
        p.className = 'quote-line fade-in';
        p.textContent = line;
        quoteLinesContainer.appendChild(p);
    });
    document.getElementById('quote-author').textContent = greeting.quote.author;

    // 초대 메시지
    const messageContainer = document.getElementById('greeting-message');
    greeting.message.forEach(line => {
        const p = document.createElement('p');
        p.className = 'message-line fade-in';
        p.textContent = line;
        messageContainer.appendChild(p);
    });
    document.getElementById('couple-intro').textContent = greeting.coupleIntro;
}

/**
 * 웨딩 날짜 섹션 초기화
 */
function initWeddingDate() {
    const { weddingDate } = CONFIG;

    document.getElementById('date-title').textContent = weddingDate.title;
    document.getElementById('date-korean').textContent = weddingDate.date;
    document.getElementById('date-english').textContent = weddingDate.dateEn;

    // D-day 계산
    const targetDate = new Date(weddingDate.targetDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('dday-number').textContent = diffDays;

    // 달력 생성
    generateCalendar(weddingDate.calendar.year, weddingDate.calendar.month, weddingDate.calendar.day);
}

/**
 * 달력 생성
 */
function generateCalendar(year, month, highlightDay) {
    const calendarContainer = document.getElementById('calendar');
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();

    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

    let html = `
        <div class="calendar-header">
            <span class="calendar-month">${year}.${String(month).padStart(2, '0')}</span>
        </div>
        <table class="calendar-table">
            <thead>
                <tr>
                    ${dayNames.map((day, i) => `<th class="${i === 0 ? 'sunday' : i === 6 ? 'saturday' : ''}">${day}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
    `;

    let dayCount = 1;
    for (let week = 0; week < 6; week++) {
        if (dayCount > lastDate) break;

        html += '<tr>';
        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            if ((week === 0 && dayOfWeek < firstDay) || dayCount > lastDate) {
                html += '<td></td>';
            } else {
                const isHighlight = dayCount === highlightDay;
                const isSunday = dayOfWeek === 0;
                const isSaturday = dayOfWeek === 6;
                let className = '';
                if (isHighlight) className += ' highlight';
                if (isSunday) className += ' sunday';
                if (isSaturday) className += ' saturday';

                html += `<td class="${className.trim()}">${dayCount}</td>`;
                dayCount++;
            }
        }
        html += '</tr>';
    }

    html += '</tbody></table>';
    calendarContainer.innerHTML = html;
}

/**
 * 신랑신부 정보 초기화
 */
function initCouple() {
    const { couple } = CONFIG;

    // 신랑 정보
    document.getElementById('groom-role').textContent = couple.groom.role;
    document.getElementById('groom-name').textContent = couple.groom.name;
    document.getElementById('groom-name-en').textContent = couple.groom.nameEn;
    document.getElementById('groom-father').textContent = couple.groom.father.name;
    document.getElementById('groom-mother').textContent = couple.groom.mother.name;
    document.getElementById('groom-relation').textContent = `의 ${couple.groom.birthOrder}`;

    // 신부 정보
    document.getElementById('bride-role').textContent = couple.bride.role;
    document.getElementById('bride-name').textContent = couple.bride.name;
    document.getElementById('bride-name-en').textContent = couple.bride.nameEn;
    document.getElementById('bride-father').textContent = couple.bride.father.name;

    // 신부측 어머니가 없는 경우 처리
    if (couple.bride.mother) {
        document.getElementById('bride-mother').textContent = couple.bride.mother.name;
    } else {
        // 어머니 관련 요소 숨기기
        const brideMotherEl = document.getElementById('bride-mother');
        const brideDotEl = brideMotherEl.previousElementSibling;
        if (brideMotherEl) brideMotherEl.style.display = 'none';
        if (brideDotEl && brideDotEl.classList.contains('dot')) brideDotEl.style.display = 'none';
    }
    document.getElementById('bride-relation').textContent = `의 ${couple.bride.birthOrder}`;

    // 연락하기 버튼
    document.getElementById('contact-btn-text').textContent = couple.contactButtonText;

    // 연락처 모달 내용 생성
    generateContactList();

    // 모달 이벤트
    document.getElementById('contact-btn').addEventListener('click', () => {
        document.getElementById('contact-modal').classList.add('active');
    });
    document.getElementById('modal-close').addEventListener('click', () => {
        document.getElementById('contact-modal').classList.remove('active');
    });
    document.querySelector('#contact-modal .modal-overlay').addEventListener('click', () => {
        document.getElementById('contact-modal').classList.remove('active');
    });
}

/**
 * 연락처 목록 생성
 */
function generateContactList() {
    const { couple } = CONFIG;
    const contactList = document.getElementById('contact-list');

    const contacts = [
        { label: '신랑', name: couple.groom.fullName, phone: couple.groom.phone },
        { label: '신랑 아버지', name: couple.groom.father.name, phone: couple.groom.father.phone },
        { label: '신랑 어머니', name: couple.groom.mother.name, phone: couple.groom.mother.phone },
        { label: '신부', name: couple.bride.fullName, phone: couple.bride.phone },
    ];

    // 신부 아버지 (전화번호가 있는 경우만)
    if (couple.bride.father && couple.bride.father.phone) {
        contacts.push({ label: '신부 아버지', name: couple.bride.father.name, phone: couple.bride.father.phone });
    }

    // 신부 어머니 (존재하는 경우만)
    if (couple.bride.mother && couple.bride.mother.phone) {
        contacts.push({ label: '신부 어머니', name: couple.bride.mother.name, phone: couple.bride.mother.phone });
    }

    contacts.forEach(contact => {
        if (!contact.phone) return; // 전화번호가 없으면 스킵

        const div = document.createElement('div');
        div.className = 'contact-item';
        div.innerHTML = `
            <span class="contact-label">${contact.label}</span>
            <span class="contact-name">${contact.name}</span>
            <a href="tel:${contact.phone}" class="contact-phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
            </a>
            <a href="sms:${contact.phone}" class="contact-sms">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
            </a>
        `;
        contactList.appendChild(div);
    });
}

/**
 * 갤러리 섹션 초기화
 */
function initGallery() {
    const { gallery } = CONFIG;

    document.getElementById('gallery-title').textContent = gallery.title;
    document.getElementById('gallery-subtitle').textContent = gallery.subtitle;

    const galleryGrid = document.getElementById('gallery-grid');
    gallery.images.forEach((image, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item fade-in';
        div.innerHTML = `<img src="${image}" alt="갤러리 ${index + 1}" data-index="${index}">`;
        div.addEventListener('click', () => openGalleryModal(index));
        galleryGrid.appendChild(div);
    });

    // 갤러리 모달 이벤트
    let currentIndex = 0;

    // 원본 이미지 경로 반환 (모달용)
    function getOriginalImagePath(thumbPath) {
        return thumbPath.replace('images/gallery/', 'images/gallery/originals/');
    }

    window.openGalleryModal = function(index) {
        currentIndex = index;
        const modal = document.getElementById('gallery-modal');
        document.getElementById('gallery-modal-img').src = getOriginalImagePath(gallery.images[currentIndex]);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    document.getElementById('gallery-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
        document.getElementById('gallery-modal-img').src = getOriginalImagePath(gallery.images[currentIndex]);
    });

    document.getElementById('gallery-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % gallery.images.length;
        document.getElementById('gallery-modal-img').src = getOriginalImagePath(gallery.images[currentIndex]);
    });

    document.getElementById('gallery-close').addEventListener('click', () => {
        document.getElementById('gallery-modal').classList.remove('active');
        document.body.style.overflow = '';
    });

    document.querySelector('#gallery-modal .modal-overlay').addEventListener('click', () => {
        document.getElementById('gallery-modal').classList.remove('active');
        document.body.style.overflow = '';
    });

    // 키보드 이벤트
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('gallery-modal');
        if (!modal.classList.contains('active')) return;

        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
            document.getElementById('gallery-modal-img').src = getOriginalImagePath(gallery.images[currentIndex]);
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % gallery.images.length;
            document.getElementById('gallery-modal-img').src = getOriginalImagePath(gallery.images[currentIndex]);
        } else if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * 오시는 길 섹션 초기화
 */
function initLocation() {
    const { location } = CONFIG;

    document.getElementById('location-title').textContent = location.title;
    document.getElementById('venue-name').textContent = location.venue.name;
    document.getElementById('venue-hall').textContent = location.venue.hall;
    document.getElementById('venue-address').textContent = location.venue.address;

    // 지도 링크
    document.getElementById('kakao-map-link').href = location.mapLinks.kakao;
    document.getElementById('naver-map-link').href = location.mapLinks.naver;

    // 길안내 생성
    generateDirections();

    // 정적 지도 표시 (API 키 불필요)
    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = `
        <div class="map-static">
            <div class="map-pin">
                <svg viewBox="0 0 24 24" fill="#D4A574" width="48" height="48">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            </div>
            <p class="map-venue">${location.venue.name}</p>
            <p class="map-address">${location.venue.address}</p>
        </div>
    `;
}

/**
 * 길안내 정보 생성
 */
function generateDirections() {
    const { location } = CONFIG;
    const directionsContainer = document.getElementById('directions');

    // 자차
    if (location.directions.car) {
        const carDiv = document.createElement('div');
        carDiv.className = 'direction-item';
        carDiv.innerHTML = `
            <h4 class="direction-title">
                <span class="direction-icon">🚗</span>
                ${location.directions.car.title}
            </h4>
            ${location.directions.car.content.map(line => `<p>${line}</p>`).join('')}
        `;
        directionsContainer.appendChild(carDiv);
    }

    // 버스
    if (location.directions.bus) {
        const busDiv = document.createElement('div');
        busDiv.className = 'direction-item';
        busDiv.innerHTML = `
            <h4 class="direction-title">
                <span class="direction-icon">🚌</span>
                ${location.directions.bus.title}
            </h4>
            ${location.directions.bus.routes.map(route => `
                <p><strong>${route.number}</strong><br>${route.description}</p>
            `).join('')}
        `;
        directionsContainer.appendChild(busDiv);
    }

    // 지하철
    if (location.directions.subway) {
        const subwayDiv = document.createElement('div');
        subwayDiv.className = 'direction-item';
        subwayDiv.innerHTML = `
            <h4 class="direction-title">
                <span class="direction-icon">🚇</span>
                ${location.directions.subway.title}
            </h4>
            ${location.directions.subway.lines.map(line => `
                <p><strong>${line.line} ${line.station}</strong><br>${line.description}</p>
            `).join('')}
        `;
        directionsContainer.appendChild(subwayDiv);
    }
}

/**
 * 계좌번호 섹션 초기화
 */
function initAccount() {
    const { account } = CONFIG;

    document.getElementById('account-title').textContent = account.title;
    document.getElementById('account-subtitle').textContent = account.subtitle;

    // 신랑측 계좌
    document.getElementById('groom-account-title').textContent = account.groom.title;
    const groomList = document.getElementById('groom-account-list');
    account.groom.accounts.forEach(acc => {
        groomList.appendChild(createAccountItem(acc));
    });

    // 신부측 계좌
    document.getElementById('bride-account-title').textContent = account.bride.title;
    const brideList = document.getElementById('bride-account-list');
    account.bride.accounts.forEach(acc => {
        brideList.appendChild(createAccountItem(acc));
    });
}

/**
 * 계좌 아이템 생성
 */
function createAccountItem(account) {
    const div = document.createElement('div');
    div.className = 'account-item';
    div.innerHTML = `
        <div class="account-header" onclick="this.parentElement.classList.toggle('open')">
            <span class="account-relation">${account.relation}</span>
            <span class="account-name">${account.name}</span>
            <span class="account-arrow">▼</span>
        </div>
        <div class="account-detail">
            <p class="account-bank">${account.bank}</p>
            <p class="account-number">${account.number}</p>
            <button class="copy-btn" onclick="copyAccount('${account.number}')">복사하기</button>
        </div>
    `;
    return div;
}

/**
 * 계좌번호 복사
 */
window.copyAccount = function(accountNumber) {
    const number = accountNumber.replace(/-/g, '');
    navigator.clipboard.writeText(number).then(() => {
        showToast('계좌번호가 복사되었습니다');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = number;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('계좌번호가 복사되었습니다');
    });
};

/**
 * 토스트 메시지 표시
 */
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

/**
 * 화환 안내 섹션 초기화
 */
function initFlower() {
    const { flower } = CONFIG;

    if (!flower.enabled) {
        document.getElementById('flower').style.display = 'none';
        return;
    }

    document.getElementById('flower-title').textContent = flower.title;
    document.getElementById('flower-message').innerHTML = flower.message.replace(/\n/g, '<br>');
}

/**
 * 공유하기 섹션 초기화
 */
function initShare() {
    const { share, meta } = CONFIG;

    // 카카오 공유
    document.getElementById('kakao-share').addEventListener('click', () => {
        if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: meta.title,
                    description: meta.description,
                    imageUrl: window.location.origin + '/' + meta.ogImage,
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href
                    }
                },
                buttons: [{
                    title: '청첩장 보기',
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href
                    }
                }]
            });
        } else if (navigator.share) {
            navigator.share({
                title: meta.title,
                text: meta.description,
                url: window.location.href
            });
        } else {
            showToast('카카오 공유가 지원되지 않습니다');
        }
    });

    // 링크 복사
    document.getElementById('copy-link-text').textContent = share.copyLink.text;
    document.getElementById('copy-link').addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('링크가 복사되었습니다');
        }).catch(() => {
            const textarea = document.createElement('textarea');
            textarea.value = window.location.href;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('링크가 복사되었습니다');
        });
    });
}

/**
 * 엔딩 섹션 초기화
 */
function initEnding() {
    const { ending } = CONFIG;

    if (ending.image) {
        document.getElementById('ending-image').src = ending.image;
    }
    document.getElementById('ending-message').textContent = ending.message;
}

/**
 * 푸터 초기화
 */
function initFooter() {
    const { footer } = CONFIG;

    document.getElementById('copyright').textContent = footer.copyright;
    document.getElementById('powered-by').textContent = footer.poweredBy;
}

/**
 * 스크롤 애니메이션 초기화
 */
function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // fade-in 클래스를 가진 모든 요소에 관찰자 적용
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // 섹션 애니메이션
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}
