<script setup lang="ts">
enum Status {
  PLANNED = 'Запланировано',
  INPROCESS = 'Идет',
  COMPLETED = 'Завершено',
}

defineProps({
  status: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="statusChip"
    :class="
      status === Status.PLANNED
        ? 'planned'
        : status === Status.INPROCESS
          ? 'inprocess'
          : status === Status.COMPLETED
            ? 'completed'
            : ''
    "
  >
    {{ status }}
  </div>
</template>

<style scoped>
.statusChip {
  padding: 4px 12px;
  border-radius: 12px;
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
