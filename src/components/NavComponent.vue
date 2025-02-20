<script setup lang="ts">
import NavItemComponent from './NavItemComponent.vue'
import CalendarIcon from './icons/CalendarIcon.vue'
import StudyIcon from './icons/StudyIcon.vue'
import DoorIcon from './icons/DoorIcon.vue'
import UserIcon from './icons/UserIcon.vue'
import GroupIcon from './icons/GroupIcon.vue'
import DeviceIcon from './icons/DeviceIcon.vue'
import SettingsIcon from './icons/SettingsIcon.vue'
import ArchiveIcon from './icons/ArchiveIcon.vue'

const navItems = [
  { text: 'Расписание', icon: CalendarIcon },
  { text: 'Учебные сессии', icon: StudyIcon },
  { text: 'Список комнат', icon: DoorIcon },
  { text: 'Пользователи', icon: UserIcon },
  { text: 'Учебные группы', icon: GroupIcon },
  { text: 'Список устройств', icon: DeviceIcon },
  { text: 'Настройки системы', icon: SettingsIcon },
  { text: 'Архив', icon: ArchiveIcon },
]
</script>

<template>
  <ul>
    <NavItemComponent v-for="(item, index) in navItems" :key="index" :navItem="item" />
  </ul>
</template>

<style scoped></style>
