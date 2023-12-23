<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="wrapper">
    <h2 class="title">포트폴리오</h2>
    <div class="portItem" style="background-image: url('https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg'); background-size: cover;">
      <h4 class="portTitle">타이틀</h4>
      <p class="portSubtext">
        <span>작업기간</span>
        <span>스택</span>
        <span>태그</span>
      </p>
      <div class="descArea">
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
.portItem{
  position: relative;
  padding:20px;
  border-radius: 20px;
  overflow: hidden;
  color: white;
}
.portItem::after{
  position: absolute;
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  background-color: black;
  opacity: 0.6;
}
.portTitle{
  position: relative;
  font-size: 1.5rem;
  z-index: 1;
}
.portSubtext{
  display: flex;
  position: relative;
  margin: 0;
  gap:20px;
  z-index: 1;
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
  position: relative;
  display: flex;
  gap: 20px;
  z-index: 1;
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
@media (max-width: 600px) {

}
</style>
