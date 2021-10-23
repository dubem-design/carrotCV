<template lang="pug">
div#skills.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  p.text-lg.mb-4.text-gray-800 {{menu.snippets}}
  div.flex.mb-8(v-for="(item, index) in content" :key="index" class="flex-col lg:flex-row")
    div.flex(class="w-full lg:w-3/12")
      h3.text-2xl.text-black {{item.categoryName}}
    div(class="w-full lg:w-9/12")
      div.text-gray-800.rounded.inline-block.py-2.px-3.bg-gray-100.mr-3.text-sm.mb-3(v-for="skill in item.skills" :key="item.id") {{skill}}
</template>

<script setup>
import { inject } from 'vue'
const {
    skills: { menu, content, setup },
} = inject('sections')
</script>
