<template>
	<Dropdown class="p-2" :options="userDropdownOptions">
		<template v-slot="{ open }">
			<button class="flex h-12 py-2 items-center rounded-md duration-300 ease-in-out" :class="isCollapsed
				? 'px-0 w-auto'
				: open
					? 'bg-white shadow-sm px-2 w-52'
					: 'hover:bg-gray-200 px-2 w-52'
				">
				<div v-if="userResource.data">
					<img
						v-if="userResource.data.user_image"
						:src="userResource.data.user_image"
						class="w-8 h-8 rounded-full flex-shrink-0"
					/>
					<UserAvatar
						v-else
						:user="userResource.data"
						class="w-8 h-8 rounded-full flex-shrink-0"
					/>
				</div>
				<div v-else>
					<User class="w-8 h-8 rounded-full flex-shrink-0 border border-gray-600 p-1" />
				</div>
				<div class="flex flex-1 flex-col text-left duration-300 ease-in-out" :class="isCollapsed
					? 'opacity-0 ml-0 w-0 overflow-hidden'
					: 'opacity-100 ml-2 w-auto'
					">
					<div class="ext-base font-medium text-gray-900 leading-none">
						<span v-if="userResource.data">{{ convertToTitleCase(userResource.data?.full_name) }}</span>
						<span v-else>{{ __('User') }}</span>
					</div>
				</div>
				<div class="duration-300 ease-in-out" :class="isCollapsed
					? 'opacity-0 ml-0 w-0 overflow-hidden'
					: 'opacity-100 ml-2 w-auto'
					">
					<ChevronDown class="h-4 w-4 text-gray-700" />
				</div>
			</button>
		</template>
	</Dropdown>
	<SettingsModal v-if="userResource.data?.is_moderator" v-model="showSettingsModal" />
</template>

<script setup>
import { sessionStore } from '@/stores/session'
import { Dropdown } from 'frappe-ui'
import UserAvatar from '@/components/UserAvatar.vue'
import Apps from '@/components/Apps.vue'
import { ChevronDown, LogIn, LogOut, User, Settings } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { convertToTitleCase } from '../utils'
import { usersStore } from '@/stores/user'
import { useSettings } from '@/stores/settings'
import { markRaw, watch, ref, onMounted } from 'vue'
import SettingsModal from '@/components/Modals/Settings.vue'

const router = useRouter()
const { logout } = sessionStore()
let { userResource } = usersStore()
const settingsStore = useSettings()
let { isLoggedIn } = sessionStore()
const showSettingsModal = ref(false)
const userDropdownOptions = ref([])

const props = defineProps({
	isCollapsed: {
		type: Boolean,
		default: false,
	},
})

watch(
	() => settingsStore.isSettingsOpen,
	(value) => {
		showSettingsModal.value = value
	}
)

onMounted(() => {
	userDropdownOptions.value = [
		{
			icon: User,
			label: __('My Profile'),
			onClick: () => {
				router.push(`/user/${userResource.data?.username}`)
			},
			condition: () => {
				return isLoggedIn
			},
		},
		{
			component: markRaw(Apps),
			condition: () => {
				let cookies = new URLSearchParams(document.cookie.split('; ').join('&'))
				let user_id = cookies.get('user_id');
				if (user_id === 'Administrator') return true
				else return false
			},
		},
		{
			icon: Settings,
			label: __('Settings'),
			onClick: () => {
				settingsStore.isSettingsOpen = true
			},
			condition: () => {
				return userResource.data?.is_moderator
			},
		},
		{
			icon: LogOut,
			label: __('Log out'),
			onClick: () => {
				logout.submit().then(() => {
					isLoggedIn = false
				})
			},
			condition: () => {
				return isLoggedIn
			},
		},
		{
			icon: LogIn,
			label: __('Log in'),
			onClick: () => {
				window.location.href = '/login'
			},
			condition: () => {
				return !isLoggedIn
			},
		},
	]
})
</script>
