# Wedding Invitation

모바일 청첩장 웹사이트

## 설정 방법

1. `js/config.example.js` 파일을 `js/config.js`로 복사하세요:
   ```bash
   cp js/config.example.js js/config.js
   ```

2. `js/config.js` 파일을 열어서 다음 정보를 수정하세요:
   - 신랑/신부 정보 (이름, 부모님 성함, 계좌번호)
   - 예식 정보 (날짜, 시간, 장소)
   - 카카오 API 키 (YOUR_KAKAO_JAVASCRIPT_API_KEY_HERE 부분을 실제 키로 변경)
   - 갤러리 이미지 경로

## 카카오 API 키 발급 방법

1. [카카오 디벨로퍼스](https://developers.kakao.com/)에 접속
2. 로그인 후 "내 애플리케이션" > "애플리케이션 추가하기"
3. 앱 생성 후 "JavaScript 키" 복사
4. `js/config.js` 파일의 `kakaoMap.appKey`와 `kakaoShare.appKey`에 붙여넣기

## 주의사항

⚠️ **보안**: `js/config.js` 파일에는 실제 API 키가 포함되어 있으므로 GitHub에 업로드하지 마세요! (이미 .gitignore에 추가되어 있습니다)
