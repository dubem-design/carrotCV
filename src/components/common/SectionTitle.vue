<template lang="pug">
h3.section-title(:class="{'text-indigo-600':routeHash === hash}")
  component.inline.mr-2(:is="icon" weight="duotone" :size="24") 
  span.capitalize {{title}}
</template>

<script setup>
import { computed } from 'vue'
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
</script>
