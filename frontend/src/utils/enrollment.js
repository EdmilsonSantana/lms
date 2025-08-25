// Reusable WhatsApp enrollment / inquiry helper
// Loads social media links once and exposes simple helpers
import { ref } from 'vue'
import { createResource } from 'frappe-ui'

const whatsAppUrl = ref(null)
let initialized = false

function init() {
  if (initialized) return
  createResource({
    url: 'lms.lms.branding.get_social_media',
    auto: true,
    transform(data) {
      const w = data.find((s) => s.name === 'WhatsApp')
      if (w) whatsAppUrl.value = w.url
    },
  })
  initialized = true
}

function openWhatsAppWithMessage(message) {
  if (!whatsAppUrl.value) return
  try {
    const url = new URL(whatsAppUrl.value)
    url.searchParams.set('text', message)
    window.open(url.href, '_blank')
  } catch (e) {
    // silently ignore malformed url
  }
}

export function useEnrollmentInquiry() {
  init()

  function enrollInCourse(title) {
    const message = __("Hi, I would like more information about the '{0}' course.").format(title)
    openWhatsAppWithMessage(message)
  }

  function enrollInBatch(title) {
    const message = __("Hi, I would like more information about the '{0}' batch.").format(title)
    openWhatsAppWithMessage(message)
  }

  return { enrollInCourse, enrollInBatch }
}
