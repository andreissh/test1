<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="btn">{{ text }}</button>
</template>

<style scoped>
.btn {
  padding: 10px 24px;
  font-weight: 700;
  color: #fff;
  background-color: #3761f3;
  border-radius: 12px;
}
</style>
