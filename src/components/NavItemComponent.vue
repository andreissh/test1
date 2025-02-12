<script setup lang="ts">
import type { Component } from 'vue'

type liContentType = {
  text: string
  icon: Component
}

defineProps<{ liContent: liContentType }>()
</script>

<template>
  <li class="navItem" :class="liContent.text === 'Учебные сессии' ? 'active' : ''">
    <div :style="{ color: liContent.text === 'Учебные сессии' ? '#fff' : '#999' }">
      <component :is="liContent.icon" />
    </div>
    <span class="text" :class="liContent.text === 'Учебные сессии' ? 'active' : ''">{{
      liContent.text
    }}</span>
  </li>
</template>

<style scoped>
.navItem {
  padding: 12px;
  margin-bottom: 4px;
  font-weight: 700;
  display: flex;
  align-items: center;
  border-radius: 16px;
}

.navItem:hover {
  background-color: #f4f4f4;
  cursor: pointer;
}

.navItem.active {
  background-color: #3761f3;
}

.text {
  margin-left: 12px;
}

.text.active {
  color: #fff;
}
</style>
