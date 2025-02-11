<script setup lang="ts">
import type { Component } from 'vue'

type liContentType = {
  text: string
  icon: Component
}

defineProps<{ liContent: liContentType }>()
</script>

<template>
  <li class="navItem">
    <component :is="liContent.icon" />
    <span class="text">{{ liContent.text }}</span>
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

.text {
  margin-left: 12px;
}
</style>
