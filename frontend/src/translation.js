import { createResource } from 'frappe-ui'

export default async function translationPlugin(app) {
	if (!window.translatedMessages) {
        await fetchTranslations()
    }
	
	app.config.globalProperties.__ = translate
	window.__ = translate;
}

function translate(message) {
	let translatedMessages = window.translatedMessages || {}
	let translatedMessage = translatedMessages[message] || message

	const hasPlaceholders = /{\d+}/.test(message)
	if (!hasPlaceholders) {
		return translatedMessage
	}
	return {
		format: function (...args) {
			return translatedMessage.replace(
				/{(\d+)}/g,
				function (match, number) {
					return typeof args[number] != 'undefined'
						? args[number]
						: match
				}
			)
		},
	}
}

function fetchTranslations() {
	const translations = createResource({
		url: 'lms.lms.api.get_translations',
		cache: 'translations',
		cache: 'translations',
		auto: false,
		transform: (data) => {
			window.translatedMessages = data
		},
	});

	translations.fetch();

	return translations.promise;
}
