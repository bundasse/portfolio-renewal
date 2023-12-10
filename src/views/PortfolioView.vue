<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="wrapper">
    <h2 class="title">포트폴리오</h2>
    <div class="portfolioContents">
      <h4 class="portTitle">타이틀</h4>
      <p class="portSubtext">
        <span>작업기간</span>
        <span>스택</span>
        <span>태그</span>
      </p>
      <div class="descArea">
        <img src="https://placehold.co/600x400" alt="image">
        <div class="portDesc">
          <p>소개문구</p>
          <div class="portLink">
            <a href="#">링크1</a>
            <a href="#">링크2</a>
            <a href="#">링크3</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.portSubtext{
  display: flex;
  gap:20px;
}
.portSubtext span{
  display: inline-block;
  position: relative;
}
.portSubtext span::after{
  display: inline-block;
  position: absolute;
  width: 1px;
  height: 0.8rem;
  top: 0.2rem;
  right: -11px;
  background-color: #aaa;
  content: '';
}
.portSubtext span:last-child::after{
  display: none;
}
.descArea{
  display: flex;
  gap: 20px;
}
.portLink{
  display: flex;
  gap: 10px;
}
.portLink a{
  display: inline-block;
  padding:2px 10px;
  border:1px solid royalblue;
  border-radius: 1rem;
}
.portLink a:hover{
  background-color: royalblue;
  color: #fff;
}
</style>
