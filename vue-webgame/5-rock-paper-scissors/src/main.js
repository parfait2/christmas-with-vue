import Vue from 'vue';                                    // Vue 라이브러리 가져오기
import RockPaperScissors from './RockPaperScissors.vue'; // RockPaperScissors 컴포넌트 가져오기
import store from './store';                              // Vuex 스토어 가져오기

new Vue({
  store,                                                   // Vuex 스토어 등록
  render: (h) => h(RockPaperScissors),       // RockPaperScissors 컴포넌트 렌더링
}).$mount('#root');                         // '#root' 요소에 마운트