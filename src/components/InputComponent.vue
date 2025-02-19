<script setup lang="ts"></script>

<template>
  <div class="search">
    <img src="@/assets/icons/searchIcon.svg" alt="Search" />
    <input type="text" placeholder="Поиск" />
  </div>
</template>

<style scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;
  width: 260px;
  padding: 0.75rem 1.125rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.75rem;
}

.search input {
  flex: 1;
  padding-left: 2rem;
}

.search input::placeholder {
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: #2f3144;
}

.search img {
  position: absolute;
  left: 18px;
  width: 20px;
  height: 20px;
}
</style>
