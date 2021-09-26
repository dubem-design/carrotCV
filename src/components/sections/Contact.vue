<template lang="pug">
div#contact.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  a.bg-gray-100.rounded-lg.px-4.py-6.justify-between.items-center.flex.mb-6(v-for="(item, index) in content" :key="index" href="#")
    div.flex-inital.flex.items-center()
      .pl-4
        component.inline.mr-2(:is="item.icon" weight="duotone" :size="30") 
      p.pl-4 {{item.info}}
    div.flex-inital.px-4()
      PhArrowRight(:size="20")
</template>

<script setup>
import { inject } from 'vue'
const {
    contact: { menu, content, setup },
} = inject('sections')
</script>
