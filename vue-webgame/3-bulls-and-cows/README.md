---

# 숫자 야구 게임 프로젝트

Vue.js와 Webpack을 사용한 숫자 야구 게임

[파일 구성]
- main.js : Vue 애플리케이션의 진입점
- NumberBaseball.html : 브라우저에서 Vue 컴포넌트를 로드
- NumberBaseball.vue : 숫자 야구 게임 로직 및 Vue 컴포넌트
- webpack.config.js : Webpack 설정 파일

---

## **구성 파일 설명**

### **1. `main.js`**
`NumberBaseball.vue` 컴포넌트를 가져와 Vue 인스턴스를 생성하고 HTML의 `#root` 요소에 마운트

---

### **2. `NumberBaseball.html`**
Vue 컴포넌트를 로드하고 실행하는 HTML 파일 
`<div id="root"></div>`는 Vue 애플리케이션의 마운트 포인트로 사용된다.

```html
<body>
    <div id="root"></div> <!-- Vue 컴포넌트가 마운트될 DOM 요소 -->
    <script src="./dist/app.js"></script> <!-- Webpack으로 번들링된 JavaScript -->
</body>
```

---

### **3. `NumberBaseball.vue`**
숫자 야구 게임의 Vue 컴포넌트  

- **템플릿** : UI 정의
- **스크립트** : 게임 로직 및 데이터 처리
- **스타일** : 컴포넌트 스타일링(추가 가능)

#### **스크립트**
숫자 야구 게임 로직 처리

- **`getNumbers`** : 정답 숫자 4자리를 랜덤하게 생성
- **`onSubmitForm`** : 사용자의 입력값을 처리하고 정답 여부를 판단

---

### **4. `webpack.config.js`**
Webpack 설정 파일

Vue 파일과 JavaScript를 번들링해서 `dist/app.js`로 출력

---

## **실행 방법**
1. 프로젝트 디렉토리에서 의존성 설치 :
   ```bash
   npm install
   ```

2. Webpack으로 빌드 :
   ```bash
   npm run build
   ```

3. 브라우저에서 `numberbaseball.html` 실행

---

## **기능 요약**
- 랜덤 숫자 생성 및 정답 확인
- 최대 10번의 시도 제한
- 시도 내역 및 결과 출력

---