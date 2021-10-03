<template lang="pug">
div.bg-white.py-3.border-t.fixed.bottom-0.w-full(class="block lg:hidden")
  .container.px-6
    ul.flex.overflow-hidden.justify-between
      li.cursor.absolute.transition-left.duration-300.overflow-hidden(style="height:32px" :style="{left: `${width.left}px`, opacity: mounted ? 1 : 0, width:width.width + 'px'}")
        .rounded-xl.w-full.h-full.transition-margin.duration-700(:class="`bg-${layoutSettings.accent}-100`" :style="{ marginTop: mounted ? '0px' : '32px', transitionDelay: `${navs.findIndex(x=>x.hash === hash) * 100 + 50}ms` }" )
      li.relative.transform.transition-transform.ease-out(v-for="(nav,index) in navs" :ref="`bnav-${index}`" :key="nav.title" :class="mounted ? 'translate-y-0' : 'translate-y-96'" :style="{ transitionDuration: `${index * 150}ms` }")
        router-link.text-gray-800.py-1.px-3.rounded-2xl.block(:to="nav.hash" style="height:32px" :class="variant(nav)")
          component.inline(:is="nav.icon" :size="24" weight="duotone") 
          //- span {{nav.title}} 
</template>

<script>
import { computed, watchEffect, ref, inject, nextTick } from 'vue'
import { useRoute } from 'vue-router'

export default {
    props: {
        navs: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        width() {
            if (this.mounted) {
                const currentNav = this.navs.findIndex(
                    (x) => x.hash === this.hash
                )
                const activeMenuElement = this.$refs[`bnav-${currentNav}`]
                console.log(activeMenuElement.getBoundingClientRect())
                return activeMenuElement.getBoundingClientRect()
            } else return 200
            // return this.$nextTick(() => {})
            // return `200px`
        },
    },
    setup(props) {
        const layoutSettings = inject('layoutSettings')
        const hash = computed(() => {
            return useRoute().hash || navs[0].hash
        })
        const variant = (nav) => {
            if (nav.hash === hash.value)
                return `text-${layoutSettings.primary}-600`
        }
        function updateCursor(id) {
            //assign article..
            console.log(hash.value)
        }
        watchEffect(() => updateCursor)
        const navs = props.navs
        let mounted = ref(false)
        setTimeout(() => {
            mounted.value = true
        }, 1000)

        const bio = inject('bio')

        return { hash, navs, mounted, bio, variant, layoutSettings }
    },
}
</script>
