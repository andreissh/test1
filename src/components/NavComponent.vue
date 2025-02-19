<script setup lang="ts">
import { markRaw, ref } from 'vue'
import NavItemComponent from './NavItemComponent.vue'
import CalendarIcon from './icons/CalendarIcon.vue'
import StudyIcon from './icons/StudyIcon.vue'
import DoorIcon from './icons/DoorIcon.vue'
import UserIcon from './icons/UserIcon.vue'
import GroupIcon from './icons/GroupIcon.vue'
import DeviceIcon from './icons/DeviceIcon.vue'
import SettingsIcon from './icons/SettingsIcon.vue'
import ArchiveIcon from './icons/ArchiveIcon.vue'

const items = ref([
  { text: 'Расписание', icon: markRaw(CalendarIcon) },
  { text: 'Учебные сессии', icon: markRaw(StudyIcon) },
  { text: 'Список комнат', icon: markRaw(DoorIcon) },
  { text: 'Пользователи', icon: markRaw(UserIcon) },
  { text: 'Учебные группы', icon: markRaw(GroupIcon) },
  { text: 'Список устройств', icon: markRaw(DeviceIcon) },
  { text: 'Настройки системы', icon: markRaw(SettingsIcon) },
  { text: 'Архив', icon: markRaw(ArchiveIcon) },
])
</script>

<template>
  <ul>
    <NavItemComponent v-for="(item, index) in items" :key="index" :liContent="item" />
  </ul>
</template>

<style scoped></style>
