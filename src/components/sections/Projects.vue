<template lang="pug">
div#projects.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  .bg-gray-100.rounded-xl.mb-8(style="height:300px")
  div.flex.mb-12(class="flex-col lg:flex-row" v-for="(item, index) in content" :key="index")
    div.flex.mb-2(class="w-full lg:w-3/12")
      div
        div.mt-1.bg-gray-200.rounded-xl.mr-4.bg-cover(style="width:50px;height:50px" )
      div
        h3.text-2xl.text-gray-900 {{item.name}}
        small.text-gray-400.text-md {{item.fromAndTo}}
    div(class="w-full lg:w-9/12")
      h3.text-2xl.text-gray-900 {{item.projectRole}}
      p.text-lg.mb-4.text-gray-700 {{item.about}}
      a.text-gray-600(:href="item.website" target="_blank" :class="`text-${layoutSettings.primary}-500 hover:text-${layoutSettings.primary}-700`")
        PhGlobe.inline.mr-2(:size="16")
        span {{item.website}}
      span.border-l.pl-6.ml-6.text-gray-500 {{item.industry}}
</template>

<script setup>
import { inject } from 'vue'
const {
    projects: { menu, content, setup },
} = inject('sections')
const layoutSettings = inject('layoutSettings')
</script>
