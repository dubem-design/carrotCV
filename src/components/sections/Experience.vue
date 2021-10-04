<template lang="pug">
div#experience.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  .bg-gray-100.rounded-xl.mb-8.overflow-hidden(style="height:300px" v-if="setup.portfolioSlide")
    img.object-cover.object-center(:src="content[activeSlideIndex].thumbnail")
  div.flex.mb-12(class="flex-col lg:flex-row" v-for="(item, index) in content" :key="index" @mouseenter="(e) => addPreview(index)" @mouseleave="(e, index) => removePreview(e, index)")
    div.flex.mb-2(class="w-full lg:w-3/12")
      div
        div.mt-1.bg-gray-200.rounded-xl.mr-4.bg-cover(style="width:50px;height:50px" :style="{ backgroundImage: `url(${item.companyLogo})` }")
      div
        h3.text-2xl.text-gray-900 {{item.company}}
        small.text-gray-500.text-md {{item.fromAndTo}}
    div(class="w-full lg:w-9/12 lg:pl-4")
      h3.text-2xl.text-gray-900 {{item.jobTitle}}
      p.text-lg.mb-4.text-gray-700 {{item.yourWorkThere}}
      a(:href="item.website" target="_blank" :class="`text-${layoutSettings.primary}-500 hover:text-${layoutSettings.primary}-700`")
        PhGlobe.inline.mr-2(:size="16")
        span {{item.website}}
      span.border-l.pl-6.ml-6.text-gray-500 {{item.companySector}}
    .bg-gray-100.rounded.fixed.z-10.border.overflow-hidden.shadow-2xl(:id="`expp-${index}`" :ref="`expp${index}`" style="height:250px;width:400px;display:none")
      img.object-cover.object-center(:src="item.thumbnail")
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
        const activeSlideIndex = ref(0)
        return {
            menu,
            content,
            setup,
            layoutSettings,
            theDiv,
            activeSlideIndex,
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
            this.activeSlideIndex = index
            if (this.setup.floatingPreview === false) return
            this.theDiv = document.getElementById(`expp-${index}`)
            document.addEventListener('mousemove', this.handleMosueOver)
        },
        removePreview() {
            if (this.setup.floatingPreview === false) return
            const div = this.theDiv
            document.removeEventListener('mousemove', this.handleMosueOver)
            div.style.top = ''
            div.style.left = ''
            div.style.display = 'none'
        },
    },
})
</script>
