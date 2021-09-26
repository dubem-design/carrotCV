<template lang="pug">
button.rounded.px-6.py-3.text-white.mr-3(:class="computeVariants") 
  slot
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'indigo',
        },
    },
    computed: {
        computeVariants() {
            const v = this.variant
            return `bg-${v}-500 hover:bg-${v}-700`
        },
    },
}
</script>
