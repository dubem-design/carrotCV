<template lang="pug">
a.rounded(:class="computeVariants" :href="href" target="_blank" class="px-3 py-2 lg:px-6 lg:py-3") 
  slot
</template>

<script>
import { inject } from 'vue'
export default {
    setup(props) {
        const layoutSettings = inject('layoutSettings')
        return { layoutSettings }
    },
    props: {
        href: {
            type: String,
            default: '#',
        },
        colorType: {
            type: String,
            default: 'primary',
        },
    },
    computed: {
        computeVariants() {
            const v = this.layoutSettings[this.colorType]
            const btnTheme =
                this.colorType === 'primary'
                    ? { normal: 500, hover: 600, text: 'white' }
                    : { normal: 100, hover: 200, text: 'black' }
            const scheme = `bg-${v}-${btnTheme.normal} hover:bg-${v}-${btnTheme.hover} text-${btnTheme.text}`
            return scheme
        },
    },
}
</script>
