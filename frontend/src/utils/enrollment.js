import { useSettings } from '@/stores/settings'
import { storeToRefs } from 'pinia';
import { showToast } from '@/utils'

export function useEnrollmentInquiry() {
  const settings = useSettings();

  const { socialSettings } = storeToRefs(settings);

  const getWhatsAppUrl = async () => {
    await socialSettings.value.reload();
    return socialSettings.value?.data?.find(s => s.name === 'WhatsApp')?.url
  }

  async function openWhatsAppWithMessage(message) {
    const whatsAppUrl = await getWhatsAppUrl();
    if (!whatsAppUrl) return
    try {
      const url = new URL(whatsAppUrl)
      url.searchParams.set('text', message)
      window.open(url.href, '_blank')
    } catch (e) {
      showToast(__('Error'), e.messages?.[0] || e, 'x')
    }
  }

  async function enrollInCourse(title) {
    const message = __("Hi, I would like more information about the '{0}' course.").format(title)
    await openWhatsAppWithMessage(message)
  }

  async function enrollInBatch(title) {
    const message = __("Hi, I would like more information about the '{0}' batch.").format(title)
    await openWhatsAppWithMessage(message)
  }

  return { enrollInCourse, enrollInBatch }
}
