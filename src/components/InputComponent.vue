<script setup lang="ts"></script>

<template>
  <div class="search">
    <img src="@/assets/searchIcon.svg" alt="Search" />
    <input type="text" placeholder="Поиск" />
  </div>
</template>

<style scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;
  width: 260px;
  padding: 12px 18px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
}

.search input {
  flex: 1;
  padding-left: 32px;
}

.search input::placeholder {
  font-size: 13px;
  line-height: 20px;
  color: #2f3144;
}

.search img {
  position: absolute;
  left: 18px;
  width: 20px;
  height: 20px;
}
</style>
