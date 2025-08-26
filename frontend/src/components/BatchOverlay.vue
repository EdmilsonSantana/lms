<template>
	<div v-if="batch.data" class="shadow rounded-md p-5 lg:w-72">
		<div class="flex justify-end mb-3">
			<ShareActions
				:slug="batch.data.name"
				:kind="'batch'"
				:title="batch.data.title || batch.data.name"
				:showQr="false"
			/>
		</div>
		<DateRange
			:startDate="batch.data.start_date"
			:endDate="batch.data.end_date"
			class="mb-3"
		/>
		<div class="flex items-center mb-3">
			<Clock class="h-4 w-4 stroke-1.5 mr-2 text-gray-700" />
			<span>
				{{ formatTime(batch.data.start_time) }} -
				{{ formatTime(batch.data.end_time) }}
			</span>
		</div>
		
		<Badge
			v-if="batch.data.seat_count && seats_left > 0"
			theme="green"
			class="self-start mb-2 float-right"
		>
			{{ seats_left }} <span v-if="seats_left > 1">{{ __('Seats Left') }}</span
			><span v-else-if="seats_left == 1">{{ __('Seat Left') }}</span>
		</Badge>
		<Badge
			v-else-if="batch.data.seat_count && seats_left <= 0"
			theme="red"
			class="self-start mb-2 float-right"
		>
			{{ __('Sold Out') }}
		</Badge>
		<router-link
			v-if="isModerator || isStudent"
			:to="{
				name: 'Batch',
				params: {
					batchName: batch.data.name,
				},
			}"
		>
			<Button variant="solid" class="w-full mt-4">
				<span>
					{{ isModerator ? __('Manage Batch') : __('Visit Batch') }}
				</span>
			</Button>
		</router-link>
		<Button
			variant="solid"
			class="w-full mt-2"
			v-else-if="batch.data.allow_self_enrollment && batch.data.seats_left"
			@click="enrollInBatch()"
		>
			{{ __('Enroll Now') }}
		</Button>
		<router-link
			v-if="isModerator"
			:to="{
				name: 'BatchForm',
				params: {
					batchName: batch.data.name,
				},
			}"
		>
			<Button class="w-full mt-2">
				<span>
					{{ __('Edit') }}
				</span>
			</Button>
		</router-link>
	</div>
</template>
<script setup>
import { inject, computed } from 'vue'
import { Badge, Button } from 'frappe-ui'
import { Clock } from 'lucide-vue-next'
import ShareActions from '@/components/Common/ShareActions.vue'
import { formatTime } from '@/utils'
import DateRange from '@/components/Common/DateRange.vue'
import { useEnrollmentInquiry } from '@/utils/enrollment'

const user = inject('$user')

const props = defineProps({
	batch: {
		type: Object,
		default: null,
	},
})

const { enrollInBatch } = useEnrollmentInquiry()

const seats_left = computed(() => {
	if (props.batch.data?.seat_count) {
		return props.batch.data?.seats_left
	}
	return null
})

const isStudent = computed(() => {
	if (!user.data) {
		return false
	}
	return props.batch.data?.students?.includes(user.data?.name)
})

const isModerator = computed(() => {
	return user.data?.is_moderator
})
</script>
