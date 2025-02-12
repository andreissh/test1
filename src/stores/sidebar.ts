import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => {
    return {
      isCollapsed: false,
    }
  },
  actions: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
  },
})
