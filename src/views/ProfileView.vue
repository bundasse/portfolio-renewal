<script setup>
import { ref } from 'vue'
import skillList from '../assets/Skill.json';

const skillData = ref(skillList);
function getImageUrl(name) {
  return new URL(`/src/assets/icons/${name}`, import.meta.url).href;
}
</script>

<template>
  <div class="wrapper">
    <h2 class="title">프로필</h2>
    <div class="profile">
      
    </div>
    <div class="careers">
      <h4>컴퓨터메이트</h4>
      <p class="workDate">2023.10 - 현재</p>
      <p class="workDid">
        - 표준 모듈 프론트엔드 작업
      </p>
    </div>
    <div class="skills">
      <ul>
        <li v-for="(e,i) in skillData" :key="i">
          <p class="skillTitle"><img :src="getImageUrl(e.icon)" :alt="e.name">{{ e.name }}</p>
          <p class="skillDesc" v-html="e.desc"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.skills ul{
  display: flex;
  flex-wrap: wrap;
  column-gap:8px;
  li{
    flex-basis: 48%;
    border: 1px solid olivedrab;
    padding: 0;
    margin: 6px 0;
  }
}
.skillTitle{
  display: flex;
  padding:8px;
  gap:4px;
  align-items: center;
  background-color: lemonchiffon;
  margin: 0;
  img{
  width:20px;
  height:20px;
  }
}
.skillDesc{
  margin: 0;
  padding:12px 8px;
}
</style>
