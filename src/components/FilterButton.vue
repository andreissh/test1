<script setup lang="ts">
defineProps({
  icon: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <button class="filterBtn">
    <component :is="icon" />
  </button>
</template>

<style scoped>
.filterBtn {
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 12px;
  display: flex;
  align-items: center;
}
</style>
