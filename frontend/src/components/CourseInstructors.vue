<template>
	<span v-if="instructors?.length == 1">
		<router-link
			v-if="instructors[0].username"
			:to="{
				name: 'Profile',
				params: { username: instructors[0].username },
			}"
		>
			{{ instructors[0].full_name }}
		</router-link>
		<span v-else>{{ instructors[0].full_name }}</span>
	</span>
	<span v-if="instructors?.length == 2">
		<router-link
			v-if="instructors[0].username"
			:to="{
				name: 'Profile',
				params: { username: instructors[0].username },
			}"
		>
			{{ instructors[0].first_name }}
		</router-link>
		<span v-else>{{ instructors[0].first_name }}</span>
		and
		<router-link
			v-if="instructors[1].username"
			:to="{
				name: 'Profile',
				params: { username: instructors[1].username },
			}"
		>
			{{ instructors[1].first_name }}
		</router-link>
		<span v-else>{{ instructors[1].first_name }}</span>
	</span>
	<span v-if="instructors?.length > 2">
		<router-link
			v-if="instructors[0].username"
			:to="{
				name: 'Profile',
				params: { username: instructors[0].username },
			}"
		>
			{{ instructors[0].first_name }}
		</router-link>
		<span v-else>{{ instructors[0].first_name }}</span>
		and {{ instructors?.length - 1 }} others
	</span>
</template>
<script setup>

const props = defineProps({
	instructors: {
		type: Array,
		required: true,
	},
})
</script>
