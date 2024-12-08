<template>
  <div>
    <button @click="$emit('select', '바위')">바위</button>
    <button @click="$emit('select', '가위')">가위</button>
    <button @click="$emit('select', '보')">보</button>
  </div>
</template>

<script>
export default {
  name: 'SelectButtons',
};
</script>
