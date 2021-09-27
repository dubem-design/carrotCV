<template lang="pug">
div#experience.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  .bg-gray-100.rounded-xl.mb-8(style="height:300px")
  div.flex.mb-12(v-for="(item, index) in content" :key="index" @mouseenter="(e) => addPreview(index)" @mouseleave="(e, index) => removePreview(e, index)")
    div.flex(class="w-3/12")
      div.mt-1.bg-gray-200.rounded-xl.mr-4.bg-cover(style="width:50px;height:50px" :style="{ backgroundImage: `url(${item.companyLogo})` }")
      div
        h3.text-2xl.text-gray-900 {{item.company}}
        small.text-gray-400.text-md {{item.fromAndTo}}
    div(class="w-9/12")
      h3.text-2xl.text-gray-900 {{item.jobTitle}}
      p.text-lg.mb-4.text-gray-700 {{item.yourWorkThere}}
      a(:href="item.website" target="_blank" :class="`text-${layoutSettings.primary}-500 hover:text-${layoutSettings.primary}-700`")
        PhGlobe.inline.mr-2(:size="16")
        span {{item.website}}
      span.border-l.pl-6.ml-6.text-gray-500 {{item.companySector}}
    .bg-gray-100.rounded.fixed.z-10.border.overflow-hidden.shadow-2xl(:id="`expp-${index}`" :ref="`expp${index}`" style="height:250px;width:400px;display:none")
      img.object-contain(src="https://source.boringavatars.com/pixel/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51")
</template>

<script>
import { inject, ref, defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const {
            experience: { menu, content, setup },
        } = inject('sections')
        const layoutSettings = inject('layoutSettings')

        const theDiv = ref(null)

        return {
            menu,
            content,
            setup,
            layoutSettings,
            theDiv,
        }
    },
    methods: {
        handleMosueOver(e) {
            const div = this.theDiv
            div.style.display = 'block'
            div.style.left = 20 + e.clientX + 'px'
            div.style.top = 20 + e.clientY + 'px'
        },

        addPreview(index) {
            console.log('entered')
            this.theDiv = document.getElementById(`expp-${index}`)
            console.log(this.theDiv)
            document.addEventListener('mousemove', this.handleMosueOver)
        },
        removePreview() {
            console.log('left')
            const div = this.theDiv
            document.removeEventListener('mousemove', this.handleMosueOver)
            div.style.top = ''
            div.style.left = ''
            div.style.display = 'none'
        },
    },
})
</script>
