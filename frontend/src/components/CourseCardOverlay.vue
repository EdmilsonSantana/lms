<template>
	<div class="shadow rounded-md min-w-80">
		<iframe v-if="course.data.video_link" :src="video_link" class="rounded-t-md min-h-56 w-full" />
		<div class="p-5">
			<ShareActions
				v-if="showUtilityIcons"
				class="mb-3"
				:slug="course.data.name"
				:kind="'course'"
				:title="course.data.title"
				@show-qr="emit('show-qr')"
			/>
			<Button v-if="course.data.batches > 0" @click="showBatches()" variant="solid" class="w-full" size="md">
				<span>
					{{ __('Show Batches') }}
				</span>
			</Button>
			<Button v-else @click="enrollInCourse(course.data.title)" variant="solid" class="w-full" size="md">
				<span>
					{{ __('Enroll Now') }}
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
		</div>
	</div>
</template>
<script setup>
import { createResource } from 'frappe-ui'
import { computed, inject } from 'vue'
import { Button } from 'frappe-ui'
import { useRouter } from 'vue-router'
import { useEnrollmentInquiry } from '@/utils/enrollment'
import ShareActions from '@/components/Common/ShareActions.vue'

const user = inject('$user')
const router = useRouter()

const props = defineProps({
	course: {
		type: Object,
		default: null,
	},
});

const showUtilityIcons = computed(() => true)

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
	if (!user.data) {
		return false
	}

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

const { enrollInCourse } = useEnrollmentInquiry()

const fetchCertificate = () => {
	certificate.submit({
		course: props.course.data?.name,
		member: user.data?.name,
	})
}
</script>
