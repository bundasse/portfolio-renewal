<script setup>
import { ref } from 'vue'

const count = ref(0)
const sideOn = ref(true)
</script>

<template>
  <div>
    <div class="portTop">
      <h4>타이틀</h4>
      <ul>
        <li>모바일 뷰</li>
        <li>PC 뷰</li>
      </ul>
      <button @click="sideOn = true">사이드열기</button>
    </div>
    웹페이지 띄울거임
    <div v-if="sideOn" class="portSide">
      <button @click="sideOn = false">닫기</button>
      여긴 옆에 설명뜨는 창
      왱알왱알
      어떤 기술스택을 사용했는지, 무엇을 공부했는지, 문제해결사례같은 것을 주로 적을 것.
    </div>
  </div>
</template>

<style lang="scss">
.portTop{
  position: fixed;
  width:100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: white;
}
</style>