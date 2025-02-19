<script setup lang="ts">
defineProps({
  icon: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <button class="filter-btn">
    <component :is="icon" />
  </button>
</template>

<style scoped>
.filter-btn {
  padding: 0.625rem;
  background-color: #f4f4f4;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
}
</style>
