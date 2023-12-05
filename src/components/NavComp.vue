<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <ul>
        <li><router-link to="/">처음으로</router-link></li>
        <li><router-link to="/profile">프로필</router-link></li>
        <li><router-link to="/portfolio">포트폴리오</router-link></li>
        <li><router-link to="/contact">연락처</router-link></li>
    </ul>
</template>

<style>
</style>
