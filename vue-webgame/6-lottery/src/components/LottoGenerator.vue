<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <!-- winBalls 배열의 각 숫자를 LottoBall 컴포넌트를 통해 출력 -->
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <!-- 보너스 번호가 있을 때만 보너스 공 표시 -->
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <!-- 다시 시작 버튼 -> redo가 true일 때만 표시 -->
    <button v-if="redo" @click="onClickRedo">한 번 더!</button>
  </div>
</template>

<script>
  import LottoBall from './LottoBall.vue';
  import { mapState, mapActions } from 'vuex';
  // import { getWinNumbers } from '@/utils/randomNumbers';

  const timeouts = [];
  export default {
    components: {
      LottoBall, // LottoBall 컴포넌트 등록
    },
    computed: {
      // Vuex 상태를 컴포넌트에 매핑
      ...mapState(['winBalls', 'bonus', 'redo']),
    },
    // data() {
    //   return {
    //     winNumbers: getWinNumbers(), // 초기 당첨 번호 설정
    //     winBalls: [], // 화면에 표시할 당첨 번호
    //     bonus: null, // 보너스 번호
    //     redo: false, // 다시 시작 버튼 표시 여부
    //   };
    // },
    methods: {
      // Vuex 액션을 컴포넌트 메서드에 매핑
      ...mapActions(['generateNumbers', 'showBalls']),

      // 다시 시작 버튼 클릭 시 실행되는 함수
      onClickRedo() {
        // this.winNumbers = getWinNumbers();
        // this.winBalls = [];
        // this.bonus = null;
        // this.redo = false;
        // this.showBalls(); // 공을 다시 보여주는 함수 호출
        this.generateNumbers();
        this.showBalls();
      },
      // 당첨 번호와 보너스 번호를 순차적으로 보여주는 함수
      // showBalls() {
      //   for (let i = 0; i < this.winNumbers.length - 1; i++) {
      //     timeouts[i] = setTimeout(() => {
      //       this.winBalls.push(this.winNumbers[i]);
      //     }, (i + 1) * 500); // 0.5초 간격으로 공 추가
      //   }
      //   timeouts[6] = setTimeout(() => {
      //     this.bonus = this.winNumbers[6]; // this.bonus로 설정
      //     this.redo = true;
      //   }, 3500);
      // },
    },
    mounted() {
      // this.showBalls(); // 컴포넌트가 마운트되면 당첨 번호를 보여줌
      this.generateNumbers();
      this.showBalls();
    },
    beforeDestroy() {
      // 컴포넌트가 제거되기 전에 모든 타이머 제거
      timeouts.forEach((t) => {
        clearTimeout(t);
      });
    },
  };
</script>

<style scoped>

</style>
