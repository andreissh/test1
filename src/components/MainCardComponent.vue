<script setup lang="ts">
import FilterComponent from './FilterComponent.vue'
import TableComponent from './TableComponent.vue'
</script>

<template>
  <div class="card">
    <div class="inner-wrapper">
      <div class="card-header">
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
  margin: 0.5rem 0.5rem 0 0.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: #fff;
}

.inner-wrapper {
  padding: 1rem 1.5rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: calc(100vh - 8px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
