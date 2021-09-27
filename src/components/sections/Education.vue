<template lang="pug">
div#education.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  div.flex.mb-12(v-for="(item, index) in content" :key="index")
    div.flex(class="w-3/12")
      div
        div.mt-1.bg-gray-200.rounded-xl.mr-4.bg-cover(style="width:50px;height:50px" :style="{ backgroundImage: `url(${item.companyLogo})` }")
      div
        h3.text-2xl.text-gray-900 {{item.school}}
        small.text-gray-400.text-md {{item.fromAndTo}}
    div(class="w-9/12")
      h3.text-2xl.text-gray-900 {{item.certificationName}}
      p.text-lg.mb-4.text-gray-700 {{item.snippet}}
  //- pre {{content}}
</template>

<script setup>
import { inject, computed } from 'vue'
import { useRoute } from 'vue-router'

const {
    education: { menu, content, setup },
} = inject('sections')

const hash = computed(() => {
    return useRoute().hash
})
</script>
