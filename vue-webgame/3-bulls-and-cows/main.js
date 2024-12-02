// main.js : Vue의 엔트리 파일, NumberBaseball 컴포넌트를 사용하여 Vue 인스턴스 생성
import Vue from 'vue'; // Vue 라이브러리 가져오기
import NumberBaseball from './NumberBaseball';  // NumberBaseball 컴포넌트 가져오기

// Vue 인스턴스를 생성하고 NumberBaseball 컴포넌트를 렌더링
// $mount 메서드 : 특정 DOM 요소에 Vue 컴포넌트 렌더링
new Vue(NumberBaseball).$mount('#root'); // NumberBaseball 컴포넌트를 #root DOM 요소에 마운트
