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
      <p class="workDate">2023.10 -</p>
      <p class="workDid">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nostrum soluta enim laudantium modi consequatur sunt facere aliquid porro quae. Id explicabo nam quisquam ullam accusantium harum doloremque nisi sint!
      </p>
    </div>
    <div class="skills">
      <ul>
        <li v-for="(e,i) in skillData" :key="i">
          <p><img :src="getImageUrl(e.icon)" :alt="e.name">{{ e.name }}</p>
          {{ e.desc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.skills ul{
  max-width: 600px;
}
.skills ul li img{
  width:20px;
  height:20px;
}
</style>
