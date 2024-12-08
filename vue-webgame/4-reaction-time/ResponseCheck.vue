<template>
  <div>
    <!-- 화면을 클릭해서 상태 변경 -->
    <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
    <!-- 결과가 있을 경우 평균 시간 표시 및 리셋 버튼 -->
    <template v-if="result.length">
      <div>평균 시간 : {{average}}ms</div>
      <button @click="onReset">Reset</button>
    </template>
  </div>
</template>

<script>
  let startTime = 0;
  let endTime = 0;
  let timeout = null;
  export default {
    data() {
      return {
        result: [], // 반응 시간을 기록하는 배열
        state: 'waiting', // 초기 상태
        message: '클릭해서 시작하세요.',
      };
    },
    computed: {
      average() {
        // 평균 반응 시간 계산
        return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
      }
    },
    methods: {
      onReset() {
        this.result = [];
        localStorage.removeItem('reactionTimes'); // 로컬 스토리지에서 기록 삭제
      },
      onClickScreen() {
        if (this.state === 'waiting') {
          // 대기 상태 -> 준비 상태로 전환
          this.state = 'ready';
          this.message = '초록색이 되면 클릭하세요.';
          timeout = setTimeout(() => {
            this.state = 'now';
            this.message = '지금 클릭!';
            startTime = new Date();
            new Audio('/MP_Blop.mp3').play(); // 소리 재생
          }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 대기 후 초록색 상태
        } else if (this.state === 'ready') {
          // 너무 일찍 클릭했을 때
          clearTimeout(timeout);
          this.state = 'waiting';
          this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
        } else if (this.state === 'now') {
          // 반응 시간 기록
          endTime = new Date();
          this.state = 'waiting';
          this.message = '클릭해서 시작하세요.';
          this.result.push(endTime - startTime);
          localStorage.setItem('reactionTimes', JSON.stringify(this.result)); // 로컬 스토리지에 저장
        }
      }
    },
    created() {
      // 컴포넌트가 생성될 때 로컬 스토리지에서 데이터 불러오기
      const savedResults = localStorage.getItem('reactionTimes');
      if (savedResults) {
        this.result = JSON.parse(savedResults);
      }
    }
  };
</script>

<style scoped>
  #screen {
     width: 300px;
     height: 200px;
     text-align: center;
     user-select: none; /* 사용자가 텍스트 선택하지 못하게 설정 */
   }
  #screen.waiting {
    background-color: aqua;
  }
  #screen.ready {
    background-color: red;
    color: white;
  }
  #screen.now {
    background-color: greenyellow;
  }
</style>
