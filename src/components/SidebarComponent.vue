<script setup lang="ts">
import { toRefs } from 'vue'
import NavComponent from './NavComponent.vue'
import { useSidebarStore } from '@/stores/sidebar'

const sidebarStore = useSidebarStore()
const { isCollapsed } = toRefs(sidebarStore)
const toggleSidebar = sidebarStore.toggleSidebar
</script>

<template>
  <aside class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="logo-wrapper">
      <img src="@/assets/icons/logo.svg" alt="logo" />
      <transition name="fade">
        <h2 class="title" v-if="!isCollapsed">Сим Центр</h2>
      </transition>
    </div>
    <button class="toggle-btn" :class="{ collapsed: isCollapsed }" @click="toggleSidebar">
      {{ isCollapsed ? '>' : '<' }}
    </button>
    <NavComponent />
    <div class="lower-wrapper">
      <div class="user">
        <transition name="fade">
          <div class="username-wrapper" v-if="!isCollapsed">
            <span class="username">Барнаби Мармадюк</span>
            <span class="position">Преподаватель</span>
          </div>
        </transition>
        <img src="@/assets/icons/userlogo.svg" alt="userlogo" />
      </div>
      <div class="logout">
        <img src="@/assets/icons/logout.svg" alt="logout" />
        <transition name="fade">
          <span class="logout-text" v-if="!isCollapsed">Выйти</span>
        </transition>
      </div>
      <div class="lang">
        <img src="@/assets/icons/flag.svg" alt="lang" />
        <transition name="fade">
          <span class="lang-text" v-if="!isCollapsed">Русский</span>
        </transition>
        <transition name="fade">
          <span class="lang-arrow" v-if="!isCollapsed">></span>
        </transition>
      </div>
      <span class="version">Версия 1.02</span>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  min-width: 274px;
  width: 274px;
  padding: 0.75rem 1.25rem;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  transition:
    width 0.5s ease-in-out,
    min-width 0.5s ease-in-out;
}

.sidebar.collapsed {
  min-width: 108px;
  width: 108px;
  align-items: center;
}

.toggle-btn {
  position: absolute;
  top: 30px;
  left: 262px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: black;
  color: #fff;
  cursor: pointer;
  transition: left 0.5s ease-in-out;
  z-index: 2;
}

.toggle-btn.collapsed {
  left: 96px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.75rem;
}

.title {
  margin-left: 0.875rem;
}

.lower-wrapper {
  margin-top: auto;
}

.user {
  padding: 0.75rem;
  margin-bottom: 1.125rem;
  display: flex;
  gap: 0.75rem;
  border-radius: 1rem;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.12);
}

.logout {
  padding: 0.75rem;
  margin-bottom: 0.25rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
}

.logout-text {
  margin-left: 0.75rem;
}

.lang {
  padding: 0.75rem;
  margin-bottom: 1.125rem;
  font-weight: 700;
  border: 1px solid #e0e0e0;
  border-radius: 0.75rem;
  display: flex;
  cursor: pointer;
}

.lang-text {
  margin-left: 0.75rem;
}

.lang-arrow {
  transform: rotate(90deg);
  color: #999;
  margin-left: auto;
}

.version {
  font-size: 0.75rem;
  line-height: 1.25rem;
  opacity: 0.65;
}

.username-wrapper {
  display: flex;
  flex-direction: column;
}

.username {
  font-weight: 700;
}

.position {
  font-size: 0.75rem;
  line-height: 1.25rem;
  opacity: 0.65;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
