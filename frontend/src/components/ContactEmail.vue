<template>
    <a v-if="contactEmail" :href="'mailto:' + contactEmail" class="text-blue-600 hover:underline">
        {{ contactEmail }}
    </a>
</template>

<script setup>

import { createResource } from 'frappe-ui'
import { ref } from 'vue';

const contactEmail = ref('');

createResource({
    url: 'lms.lms.branding.get_contact_email',
    auto: true,
    cache: 'contact_email',
    transform(data) {
        console.log(data);
        contactEmail.value = data.contact_email ?? '';
    },
});

</script>