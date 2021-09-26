<template lang="pug">
h3.section-title(:class="routeHash === hash ? `text-${layoutSettings.primary}-600` : ''")
  component.inline.mr-2(:is="icon" weight="duotone" :size="24") 
  span.capitalize {{title}}
</template>

<script setup>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
    title: {
        require: true,
        type: String,
        default: 'Enter title here',
    },
    icon: {
        require: true,
        type: String,
        default: 'PhBook',
    },
    hash: {
        require: true,
        type: String,
        default: '',
    },
})

const routeHash = computed(() => {
    return useRoute().hash
})

const layoutSettings = inject('layoutSettings')
</script>
