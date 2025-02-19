<script setup lang="ts">
enum Status {
  'Запланировано' = 'planned',
  'Идет' = 'inprocess',
  'Завершено' = 'completed',
}

const props = defineProps<{
  status: string
}>()
</script>

<template>
  <div class="status-chip" :class="Status[props.status as keyof typeof Status]">
    {{ status }}
  </div>
</template>

<style scoped>
.status-chip {
  padding: 0.25rem 0.75rem;
  border-radius: 0.75rem;
  max-width: fit-content;
}

.planned {
  background-color: #afbff5;
}

.inprocess {
  background-color: #ffdaa1;
}

.completed {
  background-color: #91c893;
}
</style>
