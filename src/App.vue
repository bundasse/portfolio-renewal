<script setup>
import NavComp from './components/NavComp.vue';
import SidemenuComp from './components/SidemenuComp.vue';
</script>

<template>
  <NavComp />
  <router-view />
  <SidemenuComp />
</template>

<style>
</style>
