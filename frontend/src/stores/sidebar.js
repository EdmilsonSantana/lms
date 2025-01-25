import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebar = defineStore('sidebar', () => {
	const isSidebarCollapsed = ref(true)

	return {
		isSidebarCollapsed,
	}
})
