<template>
	<Layout :showSidebar="showSidebar">
		<router-view />
	</Layout>
	<Dialogs />
	<Toasts />
</template>
<script setup>
import { Toasts } from 'frappe-ui'
import { Dialogs } from '@/utils/dialogs'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useScreenSize } from './utils/composables'
import DesktopLayout from './components/DesktopLayout.vue'
import MobileLayout from './components/MobileLayout.vue'
import { stopSession } from '@/telemetry'
import { init as initTelemetry } from '@/telemetry'
import { usersStore } from '@/stores/user'
import { useRoute } from 'vue-router'

const screenSize = useScreenSize()
let { userResource } = usersStore()
const route = useRoute();

const showSidebar = ref(false);

const Layout = computed(() => {
	return screenSize.width < 640 && showSidebar.value ? MobileLayout : DesktopLayout;
})

watch(route, () => {
	showSidebar.value = route.meta.showSidebar ?? true
})

onMounted(async () => {
	if (!userResource.data) return
	await initTelemetry()
})

onUnmounted(() => {
	stopSession()
})
</script>
