<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>  <!-- 컴퓨터의 선택을 보여주는 영역 -->
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
  </div>
</template>

<script>
  // 가위바위보 이미지 좌표 설정
  const rpsCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
  };

  // 점수 매핑
  const scores = {
    가위: 1,
    바위: 0,
    보: -1,
  };

  // 컴퓨터의 선택을 이미지 좌표로 변환
  const computerChoice = (imgCoord) => {
    return Object.entries(rpsCoords).find(function (v) {
      return v[1] === imgCoord;
    })[0];
  };

  let interval = null;
  export default {
    data() {
      return {
        imgCoord: rpsCoords.바위,   // 초기 컴퓨터 이미지 좌표(바위)
        result: '',
        score: 0,
      };
    },
    computed: {
      computedStyleObject() {
        return {
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
        };
      }
    },
    methods: {
      // 컴퓨터의 선택 변경
      changeHand() {
        interval = setInterval(() => {
          if (this.imgCoord === rpsCoords.바위) {
            this.imgCoord = rpsCoords.가위;
          } else if (this.imgCoord === rpsCoords.가위) {
            this.imgCoord = rpsCoords.보;
          } else if (this.imgCoord === rpsCoords.보) {
            this.imgCoord = rpsCoords.바위;
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
          this.result = '비겼습니다.';
        } else if ([-1, 2].includes(diff)) {
          this.result = '이겼습니다.';
          this.score += 1;
        } else {
          this.result = '졌습니다.';
          this.score -= 1;
        }

        // 1초 후에 컴퓨터 재시작
        setTimeout(() => {
          this.changeHand();
        }, 1000);
      },
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },

    // 컴포넌트 리사이클 훅
    mounted() {
      console.log('mounted');
      this.changeHand();
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      console.log('beforeDestroy');
      clearInterval(interval);
    },
    destroyed() {
      console.log('destroyed');
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
