<template lang="pug">
#welcome.pt-12.section
  SectionTitle(class="hidden" :title="setup.name" :hash="menu.hash" :icon="menu.icon")
  .intro.flex.mb-12(class="flex-col lg:flex-row")
    .flex-initial.mb-6(class="lg:mr-6")
      .w-36.h-36.bg-gray-100.rounded-full.bg-cover.mx-auto(:style="{ backgroundImage: `url(${content.photo})` }")
    .flex-initial.text-center(class="lg:text-left")
      h3.font-semibold.text-gray-500.text-lg(style="letter-spacing: .4em;") {{content.greeting}}
      h1.font-bold.break-words.text-black(class="text-3xl lg:text-6xl") {{content.whatYouDo}}
      .cta-buttons.pt-6
        CButton() Send DM
        CButton(colorType="accent") Learn on youtube
      //- pre {{$content}}
  div.story.border-t.pt-12
    h3.section-title.text-black {{content.title}}
    p.text-lg.text-gray-900(v-html="content.bodyHTML")
</template>

<script setup>
import { inject } from 'vue'
import CButton from '@comp/common/CButton.vue'
const {
    welcome: { content, setup, menu },
} = inject('sections')
</script>
