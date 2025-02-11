<script setup lang="ts">
import MainComponent from './components/MainComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import '@/assets/reset.css'
</script>

<template>
  <div class="pageWrapper">
    <SidebarComponent />
    <MainComponent />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

body {
  font-family: 'Manrope', serif;
  font-size: 15px;
  line-height: 24px;
}

h2 {
  font-size: 17px;
  line-height: 28px;
  font-weight: 700;
}

.pageWrapper {
  min-height: 100vh;
  display: flex;
}
</style>
