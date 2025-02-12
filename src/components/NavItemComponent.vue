<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { toRefs, type Component } from 'vue'

type liContentType = {
  text: string
  icon: Component
}

defineProps<{ liContent: liContentType }>()

const sidebarStore = useSidebarStore()
const { isCollapsed } = toRefs(sidebarStore)
</script>

<template>
  <li class="navItem" :class="liContent.text === 'Учебные сессии' ? 'active' : ''">
    <div :style="{ color: liContent.text === 'Учебные сессии' ? '#fff' : '#999' }">
      <component :is="liContent.icon" />
    </div>
    <transition name="fade">
      <span
        class="text"
        :class="liContent.text === 'Учебные сессии' ? 'active' : ''"
        v-if="!isCollapsed"
        >{{ liContent.text }}</span
      >
    </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
