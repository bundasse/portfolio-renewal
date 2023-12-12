<script setup>
import { ref } from 'vue'

const link = ref([
        {icon:"ico_github",link:"https://github.com/bundasse", alt:"GitHub"},
        {icon:"ico_tistory",link:"https://bundasse.tistory.com/",alt:"Tistory"},
        {icon:"ico_notion",link:"https://admitted-angle-505.notion.site/246f1b4d37d04595894ebd3670ad2d65",alt:"Notion"}
    ])
function getImageUrl(name) {
  return new URL(`/src/assets/icons/${name}`, import.meta.url).href;
}
</script>

<template>
    <ul class="sideMenus">
        <li v-for="e in link" :key="e">
            <a :href="e.link" target="_blank">
                <img :src="getImageUrl(e.icon)" :alt="e.alt">
            </a>
        </li>
    </ul>
</template>

<style>
</style>