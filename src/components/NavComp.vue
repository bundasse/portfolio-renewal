<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <div>
        <ul class="navBar">
            <li><router-link to="/">처음으로</router-link></li>
            <li><router-link to="/profile">프로필</router-link></li>
            <li><router-link to="/portfolio">포트폴리오</router-link></li>
            <li><router-link to="/contact">연락처</router-link></li>
        </ul>
        <div>토글버튼(darkmode)</div>
    </div>
</template>

<style>
.navBar{
    display: flex;
    gap:40px;
}
</style>
