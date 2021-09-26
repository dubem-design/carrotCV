<template lang="pug">
div#experience.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  .bg-gray-100.rounded-xl.mb-8(style="height:300px")
  div.flex.mb-12(v-for="(item, index) in content" :key="index")
    div.flex(class="w-3/12")
      div.mt-1.bg-gray-200.rounded-xl.mr-4.bg-cover(style="width:50px;height:50px" :style="{ backgroundImage: `url(${item.companyLogo})` }")
      div
        h3.text-2xl {{item.company}}
        small.text-gray-400.text-md {{item.fromAndTo}}
    div(class="w-9/12")
      h3.text-2xl {{item.jobTitle}}
      p.text-lg.mb-4 {{item.yourWorkThere}}
      a.text-gray-600.text-indigo-500(:href="item.website" target="_blank" class="hover:text-indigo-700")
        PhGlobe.inline.mr-2(:size="16")
        span {{item.website}}
      span.border-l.pl-6.ml-6 {{item.companySector}}
</template>

<script setup>
import { inject } from 'vue'
const {
    experience: { menu, content, setup },
} = inject('sections')
</script>
