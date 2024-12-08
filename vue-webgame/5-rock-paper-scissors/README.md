# 🪨✂️📄 Vue.js 가위바위보
사용자가 선택한 옵션과 컴퓨터의 선택을 비교하여 승패를 판정합니다.

- [x] Vue.js로 개발한 가위바위보 게임
- [x] **Vuex**로 상태 관리
- [x] **Webpack**으로 번들링 및 빌드

---

## 🛠️ 기술 스택

- **Frontend** : Vue.js 2.6.12
- **State Management** : Vuex 3.6.2
- **Build Tools** : Webpack 5.97.1
- **Linting & Formatting** : ESLint, Prettier

---

## 🚀 실행 방법
1. 프로젝트 디렉토리에서 의존성 설치
   ```bash
   npm install
   ```

2. 프로덕션 빌드
   ```bash
   npm run build
   ```

3. 개발 서버 실행
   ```bash
   npm run dev
   ```

4. 브라우저에서 `http://localhost:8080` 접속

---

📂 프로젝트 구조
```csharp
.
├── public/
│   └── index.html            # 진입점 HTML 파일
├── src/
│   ├── components/           # Vue 컴포넌트들
│   │   ├── DisplayResult.vue
│   │   └── SelectButtons.vue
│   ├── utils/                # 유틸리티 함수
│   │   └── rockPaperScissors.js
│   ├── store/                # Vuex 상태 관리
│   │   └── index.js
│   ├── main.js               # Vue 인스턴스 진입점
│   └── RockPaperScissors.vue # 메인 게임 컴포넌트
├── webpack.dev.js            # 개발용 Webpack 설정
└── webpack.prod.js           # 프로덕션용 Webpack 설정
```

## 🔧 주요 기능

### 📝 Main features
1. **[가위바위보 게임]** 컴퓨터와 가위바위보 대결을 할 수 있습니다.
2. **[점수 및 결과 표시]** 게임 결과에 따라 승패와 점수를 실시간으로 업데이트합니다.

---

### 💡 Add features

3. **[Vuex 상태 관리]** 점수와 결과를 Vuex로 중앙 관리합니다.
4. **[Webpack 번들링]** 개발 및 배포 환경에 맞게 파일을 번들링합니다.
5. **[핫 모듈 리플레이스먼트(HMR)]**: 개발 중 코드 수정 시 자동으로 반영됩니다.

---

## 🧑‍💻 Developed by

- **이름** : [Yerin Park](https://github.com/parfait2)
- **이메일** : [yerinpark.dev@gmail.com](mailto:yerinpark.dev@gmail.com)

---

## 📚 Reference

Inflearn [웹 게임을 만들며 배우는 Vue](https://www.inflearn.com/course/web-game-vue/dashboard)

---