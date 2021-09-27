<template lang="pug">
.pr-8()
  .mb-8
    h1.text-4xl.font-bold.text-gray-800 {{bio.firstname}} 
    h1.text-4xl.font-bold.text-gray-800 {{bio.middlename}}
    h1.text-4xl.font-bold.text-gray-800 {{bio.lastname}}
    p.Building.text-gray-600.mt-4 {{bio.tagline}}
  ul.relative
    li.cursor.absolute.w-full.transition-top.duration-300.overflow-hidden(style="height:56px" :style="{top: `${navs.findIndex(x=>x.hash === hash) * 56}px`, opacity: mounted ? 1 : 0 }")
      .rounded-2xl.w-full.h-full.transition-margin.duration-700(:class="`bg-${layoutSettings.accent}-100`" :style="{ marginTop: mounted ? '0px' : '56px', transitionDelay: `${navs.findIndex(x=>x.hash === hash) * 100 + 50}ms` }" )
    li.relative.transform.transition-transform.ease-out(v-for="(nav,index) in navs" :key="nav.title" :class="mounted ? 'translate-x-0' : '-translate-x-96'" :style="{ transitionDuration: `${index * 150}ms` }")
      router-link.text-gray-800.py-4.px-6.rounded-2xl.block(:to="nav.hash" style="height:56px" :class="variant(nav)")
        component.inline.mr-3(:is="nav.icon" :size="24" weight="duotone") 
        span {{nav.title}}
</template>

<script>
import { computed, watchEffect, ref, inject } from 'vue'
import { useRoute } from 'vue-router'

export default {
    props: {
        navs: {
            type: Array,
            default: () => [],
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
