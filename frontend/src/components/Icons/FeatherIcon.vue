<template>
    <div v-html="svgIcon" :title="iconLabel"></div>
</template>
<script setup>
import feather from 'feather-icons';
import { computed } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: false,
        default: ''
    }
})

const svgIcon = computed(() => {
    return feather.toSvg(props.icon);
});

const iconLabel = computed(() => {
    return props.label;
});
</script>