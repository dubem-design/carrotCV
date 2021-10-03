<template lang="pug">
div#contact.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  a.rounded-lg.px-4.py-6.justify-between.items-center.flex.mb-6(v-for="(item, index) in content" :key="index" :href="item.link" target="_blank" :class="`bg-${layoutSettings.accent}-100`")
    div.flex-inital.flex.items-center(class="flex-col lg:flex-row")
      .pl-4
        component.inline.mr-2.text-gray-900(:is="item.icon" weight="duotone" :size="30") 
      p.pl-4.text-gray-900(class="text-center lg:text-left") {{item.info}}
    div.flex-inital.px-4(class="hidden lg:block")
      PhArrowRight.text-gray-900(:size="20")
  SocialBar(:isHorizontal="true")
</template>

<script setup>
import SocialBar from '@comp/layout/SocialBar.vue'
import { inject } from 'vue'
const {
    contact: { menu, content, setup },
} = inject('sections')
const layoutSettings = inject('layoutSettings')
</script>
