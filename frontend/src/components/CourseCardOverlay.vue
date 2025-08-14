<template>
	<div class="shadow rounded-md min-w-80">
		<iframe v-if="course.data.video_link" :src="video_link" class="rounded-t-md min-h-56 w-full" />
		<div class="p-5">
			<Button @click="showBatches()" :disabled="course.data.batches === 0" variant="solid" class="w-full" size="md">
				<span>
					{{ __('Show Batches') }}
				</span>
			</Button>
			<Button v-if="canGetCertificate" @click="fetchCertificate()" variant="subtle" class="w-full mt-2" size="md">
				{{ __('Get Certificate') }}
			</Button>
			<router-link v-if="user?.data?.is_moderator || is_instructor()" :to="{
					name: 'CourseForm',
					params: {
						courseName: course.data.name,
					},
				}">
				<Button variant="subtle" class="w-full mt-2" size="md">
					<span>
						{{ __('Edit') }}
					</span>
				</Button>
			</router-link>
			<div class="mt-8 mb-4 font-medium">
				{{ __('This course has:') }}
			</div>
			<div class="flex items-center mb-3">
				<GraduationCap class="h-5 w-5 stroke-1.5 text-gray-600" />
				<span class="ml-2">
					{{ course.data.batches }}
					{{ Number(course.data.batches) === 1 ? __('Batch') : __('Batches') }}
				</span>
			</div>
			<div class="flex items-center mb-3">
				<Users class="h-5 w-5 stroke-1.5 text-gray-600" />
				<span class="ml-2">
					{{ formatAmount(course.data.enrollments) }}
					{{ Number(course.data.enrollments) === 1 ? __('Enrolled Student') : __('Enrolled Students') }}
				</span>
			</div>
			<div class="flex items-center">
				<Star class="h-5 w-5 stroke-1.5 fill-orange-500 text-gray-50" />
				<span class="ml-2"> {{ course.data.rating }} {{ __('Rating') }} </span>
			</div>
		</div>
	</div>
</template>
<script setup>
import { Users, Star, GraduationCap } from 'lucide-vue-next'
import { computed, inject } from 'vue'
import { Button, createResource } from 'frappe-ui'
import { formatAmount } from '@/utils/'
import { useRouter } from 'vue-router'

const user = inject('$user')
const router = useRouter()

const props = defineProps({
	course: {
		type: Object,
		default: null,
	},
});

const showBatches = () => {
	router.push({
        name: 'Batches',
        query: { courseName: props.course.data.name }
      })
}

const video_link = computed(() => {
	if (props.course.data.video_link) {
		return 'https://www.youtube.com/embed/' + props.course.data.video_link
	}
	return null
})

const is_instructor = () => {
	let user_is_instructor = false
	props.course.data.instructors.forEach((instructor) => {
		if (!user_is_instructor && instructor.name == user.data?.name) {
			user_is_instructor = true
		}
	})
	return user_is_instructor
}

const canGetCertificate = computed(() => {
	if (
		props.course.data?.enable_certification &&
		props.course.data?.membership?.progress == 100
	) {
		return true
	}
	return false
})

const certificate = createResource({
	url: 'lms.lms.doctype.lms_certificate.lms_certificate.create_certificate',
	makeParams(values) {
		return {
			course: values.course,
		}
	},
	onSuccess(data) {
		window.open(
			`/api/method/frappe.utils.print_format.download_pdf?doctype=LMS+Certificate&name=${
				data.name
			}&format=${encodeURIComponent(data.template)}`,
			'_blank'
		)
	},
})

const fetchCertificate = () => {
	certificate.submit({
		course: props.course.data?.name,
		member: user.data?.name,
	})
}
</script>
