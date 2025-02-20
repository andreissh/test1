<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { toRefs, type Component } from 'vue'

type navItemType = {
  text: string
  icon: Component
}

defineProps<{ navItem: navItemType }>()

const sidebarStore = useSidebarStore()
const { isCollapsed } = toRefs(sidebarStore)
</script>

<template>
  <li class="nav-item" :class="navItem.text === 'Учебные сессии' ? 'active' : ''">
    <div :style="{ color: navItem.text === 'Учебные сессии' ? '#fff' : '#999' }">
      <component :is="navItem.icon" />
    </div>
    <transition name="fade">
      <span
        class="text"
        :class="navItem.text === 'Учебные сессии' ? 'active' : ''"
        v-if="!isCollapsed"
        >{{ navItem.text }}</span
      >
    </transition>
  </li>
</template>

<style scoped>
.nav-item {
  padding: 0.75rem;
  margin-bottom: 0.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  border-radius: 1rem;
}

.nav-item:hover {
  background-color: #f4f4f4;
  cursor: pointer;
}

.nav-item.active {
  background-color: #3761f3;
}

.text {
  margin-left: 0.75rem;
}

.text.active {
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
