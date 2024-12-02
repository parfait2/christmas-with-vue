<template>
  <div>
    <h1>{{result}}</h1> <!-- {{...}} : Vue의 템플릿 문법. 데이터 바인딩 표현 -->

    <!-- @submit.prevent : form의 기본 동작(페이지 새로고침)dmf 방지하고 메서드를 호출합니다. -->
    <form @submit.prevent="onSubmitForm"> <!-- form 제출 이벤트 방지 및 onSubmitForm 호출 -->

      <!-- v-model : 양방향 데이터 바인딩, 사용자 입력과 Vue의 data 속성 동기화 -->
      <input ref="answer" minlength="4" maxlength="4" v-model="value" /> <!-- 입력값 바인딩 -->
      <button type="submit">입력</button>
    </form>
    <div>시도: {{tries.length}}</div>
    <ul>
      <!-- v-for : 반복문으로 tries 배열을 순회하여 시도한 내용과 결과 출력 -->
      <li v-for="t in tries" :key="t.try">
        <div>{{t.try}}</div>
        <div>{{t.result}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  // 정답 숫자 4자리를 랜덤하게 생성
  const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 후보 숫자 배열
    const array = []; // 정답 배열
    for (let i = 0; i < 4; i += 1) { // 4자리 숫자 생성
      const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0]; // 랜덤으로 숫자 선택
      array.push(chosen); // 정답 배열에 추가
    }
    return array; // 생성된 숫자 배열 반환
  };

  export default {
    data() {
      return {
        answer: getNumbers(), // 정답 숫자 배열 ex) [1,5,3,4]
        tries: [], // 시도 수
        value: '', // 입력
        result: '', // 결과
      }
    },
    methods: {
      // 사용자의 입력값 처리, 정답과 비교하여 결과 갱신
      onSubmitForm() {
        if (this.value === this.answer.join('')) { // 정답 맞췄으면
          this.tries.push({
            try: this.value,
            result: '홈런',
          });
          this.result = '홈런';
          alert('게임을 다시 실행합니다.');
          this.value = '';
          this.answer = getNumbers(); // 새 정답 생성
          this.tries = [];
          this.$refs.answer.focus(); // 입력창에 포커스
        } else { // 정답 틀렸을 때
          if (this.tries.length >= 9) { // 10번째 시도
            this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(',')}였습니다!`;
            alert('게임을 다시 시작합니다.');
            this.value = '';
            this.answer = getNumbers();
            this.tries = [];
            this.$refs.answer.focus();
          }
          let strike = 0;
          let ball = 0;
          const answerArray = this.value.split('').map(v => parseInt(v)); // 입력값 숫자 배열로 변환
          for (let i = 0; i < 4; i += 1) {
            if (answerArray[i] === this.answer[i]) { // 숫자 자릿수 모두 정답
              strike++; // 자리와 숫자가 일치할 때
            } else if (this.answer.includes(answerArray[i])) { // 숫자만 정답
              ball++; // 숫자만 일치할 때
            }
          }
          this.tries.push({
            try: this.value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          });
          this.value = '';
          this.$refs.answer.focus();
        }
      }
    }
  };
</script>

<style>

</style>
