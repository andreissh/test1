<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import FilterButton from './FilterButton.vue'
import FilterIcon from './icons/FilterIcon.vue'
import FilterIcon2 from './icons/FilterIcon2.vue'
import InputComponent from './InputComponent.vue'
</script>

<template>
  <div class="filters">
    <InputComponent />
    <FilterButton :icon="FilterIcon" />
    <FilterButton :icon="FilterIcon2" />
    <ButtonComponent text="Создать" />
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 0.875rem;
}
</style>
