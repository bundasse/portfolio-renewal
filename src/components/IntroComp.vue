<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div>
    <table>
      <tr v-for="e in 7" :key="e">
        <td v-for="el in 10" :key="el"></td>
      </tr>
    </table>
  </div>
</template>

<style>
</style>
