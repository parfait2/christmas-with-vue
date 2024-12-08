<template>
  <div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
  </div>
</template>
<script>
export default {
  props: {
    result: String,
    score: Number,
  },
};
</script>