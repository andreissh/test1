<script setup lang="ts">
import FilterComponent from './FilterComponent.vue'
import TableComponent from './TableComponent.vue'
</script>

<template>
  <div class="card">
    <div class="innerWrapper">
      <div class="cardHeader">
        <h2 class="title">Учебные сессии</h2>
        <FilterComponent />
      </div>
      <TableComponent />
    </div>
  </div>
</template>

<style scoped>
.card {
  min-height: calc(100vh - 8px);
  margin: 8px 8px 0 8px;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
}

.innerWrapper {
  padding: 16px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: calc(100vh - 8px);
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
