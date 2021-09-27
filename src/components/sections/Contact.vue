<template lang="pug">
div#contact.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  a.rounded-lg.px-4.py-6.justify-between.items-center.flex.mb-6(v-for="(item, index) in content" :key="index" href="#" :class="`bg-${layoutSettings.accent}-100`")
    div.flex-inital.flex.items-center()
      .pl-4
        component.inline.mr-2.text-gray-900(:is="item.icon" weight="duotone" :size="30") 
      p.pl-4.text-gray-900 {{item.info}}
    div.flex-inital.px-4()
      PhArrowRight.text-gray-900(:size="20")
</template>

<script setup>
import { inject } from 'vue'
const {
    contact: { menu, content, setup },
} = inject('sections')
const layoutSettings = inject('layoutSettings')
</script>
