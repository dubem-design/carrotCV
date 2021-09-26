<template lang="pug">
button.rounded.px-6.py-3.mr-3(:class="computeVariants") 
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

            return `bg-${v}-${btnTheme.normal} hover:bg-${v}-${btnTheme.hover} text-${btnTheme.text}`
        },
    },
}
</script>
