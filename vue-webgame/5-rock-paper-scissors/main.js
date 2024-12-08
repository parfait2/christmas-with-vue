import Vue from 'vue';                       // Vue 라이브러리를 가져옵니다.
import RockPaperScissors from './RockPaperScissors.vue';  // RockScissorsPaper 컴포넌트를 가져옵니다.

new Vue({
  render: createElement => createElement(RockPaperScissors) // RockPaperScissors 컴포넌트를 렌더링합니다.
}).$mount('#root');                           // '#root' 요소에 Vue 인스턴스를 마운트합니다.
