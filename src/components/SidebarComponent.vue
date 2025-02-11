<script setup lang="ts">
import NavComponent from './NavComponent.vue'
</script>

<template>
  <aside class="sidebar">
    <div class="logoWrapper">
      <img src="@/assets/logo.svg" alt="logo" />
      <h2 class="title">Сим Центр</h2>
    </div>
    <NavComponent />
    <div class="lowerWrapper">
      <div class="user">
        <div class="usernameWrapper">
          <span class="username">Барнаби Мармадюк</span>
          <span class="position">Преподаватель</span>
        </div>
        <img src="@/assets/userlogo.svg" alt="userlogo" />
      </div>
      <div class="logout">
        <img src="@/assets/logout.svg" alt="logout" />
        <span class="logoutText">Выйти</span>
      </div>
      <div class="lang">
        <img src="@/assets/flag.svg" alt="lang" />
        <span class="langText">Русский</span>
        <span class="langArrow">></span>
      </div>
      <span class="version">Версия 1.02</span>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  min-width: 274px;
  transition: transform 0.3s ease-in-out;
  padding: 12px 19px;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
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
</style>
