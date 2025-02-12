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
    <div class="logoWrapper">
      <img src="@/assets/logo.svg" alt="logo" />
      <transition name="fade">
        <h2 class="title" v-if="!isCollapsed">Сим Центр</h2>
      </transition>
    </div>
    <button class="toggleBtn" :class="{ collapsed: isCollapsed }" @click="toggleSidebar">
      {{ isCollapsed ? '>' : '<' }}
    </button>
    <NavComponent />
    <div class="lowerWrapper">
      <div class="user">
        <transition name="fade">
          <div class="usernameWrapper" v-if="!isCollapsed">
            <span class="username">Барнаби Мармадюк</span>
            <span class="position">Преподаватель</span>
          </div>
        </transition>
        <img src="@/assets/userlogo.svg" alt="userlogo" />
      </div>
      <div class="logout">
        <img src="@/assets/logout.svg" alt="logout" />
        <transition name="fade">
          <span class="logoutText" v-if="!isCollapsed">Выйти</span>
        </transition>
      </div>
      <div class="lang">
        <img src="@/assets/flag.svg" alt="lang" />
        <transition name="fade">
          <span class="langText" v-if="!isCollapsed">Русский</span>
        </transition>
        <transition name="fade">
          <span class="langArrow" v-if="!isCollapsed">></span>
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
  padding: 12px 19px;
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

.toggleBtn {
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
}

.toggleBtn.collapsed {
  left: 96px;
}

.logoWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 43px;
}

.title {
  margin-left: 14px;
}

.lowerWrapper {
  margin-top: auto;
}

.user {
  padding: 12px;
  margin-bottom: 18px;
  display: flex;
  gap: 12px;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.12);
}

.logout {
  padding: 12px;
  margin-bottom: 4px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
}

.logoutText {
  margin-left: 12px;
}

.lang {
  padding: 12px;
  margin-bottom: 18px;
  font-weight: 700;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
}

.langText {
  margin-left: 12px;
}

.langArrow {
  transform: rotate(90deg);
  color: #999;
  margin-left: auto;
}

.version {
  font-size: 13px;
  line-height: 20px;
  opacity: 0.65;
}

.usernameWrapper {
  display: flex;
  flex-direction: column;
}

.username {
  font-weight: 700;
}

.position {
  font-size: 13px;
  line-height: 20px;
  opacity: 0.65;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
