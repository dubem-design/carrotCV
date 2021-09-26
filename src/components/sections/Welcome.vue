<template lang="pug">
#welcome.pt-12.section
  SectionTitle(:title="setup.name" :hash="menu.hash" :icon="menu.icon")
  .intro.flex.mb-12
    .flex-initial.mr-6
      .w-36.h-36.bg-gray-100.rounded-full.bg-cover(:style="{ backgroundImage: `url(${content.photo})` }")
    .flex-initial
      h3.font-semibold.text-gray-500.text-lg(style="letter-spacing: .4em;") {{content.greeting}}
      h1.text-6xl.font-bold.break-words {{content.whatYouDo}}
      .cta-buttons.pt-6
        CButton() Send DM
        CButton(colorType="accent") Learn on youtube
      //- pre {{$content}}
  div.story.border-t.pt-12
    h3.section-title {{content.title}}
    p.text-lg(v-html="content.bodyHTML")
</template>

<script setup>
import { inject } from 'vue'
import CButton from '@comp/common/CButton.vue'
const {
    welcome: { content, setup, menu },
} = inject('sections')
</script>
