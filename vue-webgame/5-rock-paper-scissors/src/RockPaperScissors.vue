<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
<!--    <div v-if="true" id="computer" :style="computedStyleObject"></div>-->
    <SelectButtons @select="onClickButton"/>
    <DisplayResult :result="result" :score="score"/>
  </div>
</template>

<script>
// 가위바위보 이미지 좌표 설정
import SelectButtons from "./components/SelectButtons.vue";
import DisplayResult from "./components/DisplayResult.vue";
import {mapState, mapMutations} from 'vuex';
import {OPTIONS, rpsCoords, scores, computerChoice} from './utils/rockPaperScissors'; // 유틸 함수 분리 (옵션)

let interval = null;
export default {
  components: {DisplayResult, SelectButtons},
  data() {
    return {
      imgCoord: rpsCoords[OPTIONS.ROCK],   // 초기 컴퓨터 이미지 좌표(바위)
    };
  },
  computed: {
    ...mapState(['score', 'result']), // Vuex 상태를 계산된 속성에 매핑
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
      };
    }
  },
  methods: {
    // 컴퓨터의 선택 변경
    ...mapMutations(['setScore', 'setResult']), // Vuex 변이 함수 매핑
    changeHand() {
      interval = setInterval(() => {
        if (this.imgCoord === rpsCoords[OPTIONS.ROCK]) {
          this.imgCoord = rpsCoords[OPTIONS.SCISSORS];
        } else if (this.imgCoord === rpsCoords[OPTIONS.SCISSORS]) {
          this.imgCoord = rpsCoords[OPTIONS.PAPER];
        } else if (this.imgCoord === rpsCoords[OPTIONS.PAPER]) {
          this.imgCoord = rpsCoords[OPTIONS.ROCK];
        }
      }, 100);
    },
    // 버튼 클릭 시 호출
    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(this.imgCoord)];
      const diff = myScore - cpuScore;

      // 결과 판정
      if (diff === 0) {
        this.setResult('비겼습니다.');
      } else if ([-1, 2].includes(diff)) {
        this.setResult('이겼습니다.');
        this.setScore(this.score + 1);
      } else {
        this.setResult('졌습니다.');
        this.setScore(this.score - 1);
      }

      // 1초 후에 컴퓨터 재시작
      setTimeout(() => {
        this.changeHand();
      }, 1000);
    },
  },
  beforeCreate() {
    // console.log('beforeCreate');
  },
  created() {
    // console.log('created');
  },
  beforeMount() {
    // console.log('beforeMount');
  },

  // 컴포넌트 리사이클 훅
  mounted() {
    // console.log('mounted');
    this.changeHand();
  },
  beforeUpdate() {
    // console.log('beforeUpdate');
  },
  updated() {
    // console.log('updated');
  },
  beforeDestroy() {
    // console.log('beforeDestroy');
    clearInterval(interval);
  },
  destroyed() {
    // console.log('destroyed');
  },
};
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
