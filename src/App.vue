<script setup lang="ts">
import MainComponent from './components/MainComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import '@/assets/styles/reset.css'
</script>

<template>
  <div class="pageWrapper">
    <SidebarComponent />
    <MainComponent />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(100, 100, 100, 0.8);
}

body {
  font-family: 'Manrope', serif;
  font-size: 1rem;
  line-height: 1.5rem;
}

h2 {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
}

.pageWrapper {
  min-height: 100vh;
  display: flex;
}
</style>
