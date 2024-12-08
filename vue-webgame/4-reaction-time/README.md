# 🕹️ 반응 속도 체크(Vue.js)
- [x] Vue.js와 Webpack을 사용하여 개발
- [x] 사용자의 반응 시간 측정 및 평균 계산

## 실행 방법
1. 프로젝트 디렉토리에서 의존성 설치
   ```bash
   npm install
   ```
   
   [optional] 오류 발생 시 vue와 vue-template-compiler 일치시키기
   ```bash
   npm i vue@2.7.16
   ```

   [optional] package.json에 의존성 추가 예시
   ```bash
   npm i webpack webpack-cli -D
   npm i vue-style-loader -D
   npm css-loader -D
   npm i vue-template-compiler -D
   ```

2. Webpack으로 프로덕션 빌드 생성
   ```bash
   npm run build
   ```

3. 개발 서버 실행
   ```bash
   npm run dev
   ```

4. 브라우저에서 `http://localhost:8080/ResponseCheck.html` 접속

---

## 📝 Main features
1. **[반응 시간 측정]** 화면이 초록색으로 바뀌면 최대한 빨리 클릭하세요.
2. **[평균 계산]**  여러 번 시도한 후 평균 반응 시간을 확인할 수 있습니다.
3. **[다시 시작]** 결과를 초기화하고 다시 시작할 수 있습니다.

---

## 🧐 How to play

1. **"클릭해서 시작하세요"** 메시지를 클릭합니다.
2. 화면이 **초록색**으로 바뀌면 최대한 빨리 클릭합니다.
3. 반응 시간이 기록됩니다. 여러 번 시도 후 평균을 확인할 수 있습니다.
4. **"리셋"** 버튼으로 기록을 초기화할 수 있습니다.

---

## 🧑‍💻 Developed by

- **이름** : [Yerin Park](https://github.com/parfait2)
- **이메일** : [yerinpark.dev@gmail.com](mailto:yerinpark.dev@gmail.com)

---

## 📚 Reference

Inflearn [웹 게임을 만들며 배우는 Vue](https://www.inflearn.com/course/web-game-vue/dashboard)

---