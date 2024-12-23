<template>
	<Layout>
		<router-view />
	</Layout>
	<Dialogs />
	<Toasts />
</template>
<script setup>
import { Toasts } from 'frappe-ui'
import { Dialogs } from '@/utils/dialogs'
import { computed, onMounted, onUnmounted } from 'vue'
import { useScreenSize } from './utils/composables'
import DesktopLayout from './components/DesktopLayout.vue'
import MobileLayout from './components/MobileLayout.vue'
import HomeLayout from './components/HomeLayout.vue'
import { stopSession } from '@/telemetry'
import { init as initTelemetry } from '@/telemetry'
import { usersStore } from '@/stores/user'
import { useRoute } from 'vue-router'

const screenSize = useScreenSize()
let { userResource } = usersStore()
const route = useRoute();

const Layout = computed(() => {
	if (screenSize.width < 640) {
		return MobileLayout
	}
	const isHome = route.meta?.isHome ?? false;
	return isHome ? HomeLayout : DesktopLayout;
})

onMounted(async () => {
	if (!userResource.data) return
	await initTelemetry()
})

onUnmounted(() => {
	stopSession()
})
</script>
