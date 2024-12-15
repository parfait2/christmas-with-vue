<template>
  <!-- :style="styleObject": styleObject라는 계산된 속성을 통해 동적으로 스타일 적용 -->
  <div class="ball" :style="styleObject">{{number}}</div>
</template>

<script>
  export default {
    name: 'LottoBall',
    props: {
      number: Number, // 부모 컴포넌트에서 숫자를 전달받음
    },
    computed: {
      styleObject() {
        let background;
        // 숫자 범위에 따라 배경색을 설정합니다.
        if (this.number <= 10) {
          background = 'red';
        } else if (this.number <= 20) {
          background = 'orange';
        } else if (this.number <= 30) {
          background = 'yellow';
        } else if (this.number <= 40) {
          background = 'blue';
        } else {
          background = 'green';
        }
        return {
          background,
        };
      }
    },
  }
</script>

<style>
  .ball {
    display: inline-block;
    border: 1px solid black;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    margin-right: 20px;
    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
      font-size: 14px;
    }
  }
</style>
