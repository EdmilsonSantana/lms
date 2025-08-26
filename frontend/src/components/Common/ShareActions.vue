<template>
  <div class="flex justify-end gap-2" v-if="slug">
    <Button
      variant="subtle"
      size="sm"
      aria-label="Share"
      @click="share"
    >
      <Share2 class="w-4 h-4" />
    </Button>
  </div>
</template>
<script setup>
import { Share2 } from 'lucide-vue-next'
import { Button } from 'frappe-ui'
import { showToast } from '@/utils'
import { computed } from 'vue'

const props = defineProps({
  slug: { type: String, required: true },
  kind: { type: String, default: 'course' }, // 'course' | 'batch'
  title: { type: String, default: '' },
  showQr: { type: Boolean, default: true },
  basePath: { type: String, default: '' }, // optional override like '/lms/courses/'
})

const shareUrl = computed(() => {
  const path = props.basePath
    ? props.basePath.replace(/\/$/, '') + '/' + props.slug
    : props.kind === 'batch'
    ? `/lms/batches/details/${props.slug}`
    : `/lms/courses/${props.slug}`
  return `${window.location.origin}${path}`
})

const share = async () => {
  const title = props.title || (props.kind === 'batch' ? __('Batch') : __('Course'))
  const url = shareUrl.value
  if (navigator.share) {
    try {
      await navigator.share({ title, url })
      return
    } catch (err) {
      // fallthrough to copy
    }
  }
  try {
    await navigator.clipboard.writeText(url)
    showToast(__('Success'), __('Link copied to clipboard'), 'check')
  } catch (e) {
    showToast(__('Error'), __('Unable to copy link'), 'x')
  }
}
</script>
