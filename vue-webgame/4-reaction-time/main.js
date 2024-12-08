import Vue from 'vue'; // Vue 라이브러리 가져오기
import ResponseCheck from './ResponseCheck'; // 사용자 정의 Vue 컴포넌트 가져오기

// Vue 인스턴스를 생성하여 렌더링
new Vue({
  render: createElement => createElement(ResponseCheck) // `ResponseCheck` 컴포넌트를 렌더링
}).$mount('#root'); // `#root`라는 id를 가진 DOM에 Vue 인스턴스를 마운트
