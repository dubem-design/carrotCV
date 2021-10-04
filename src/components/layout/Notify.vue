<template lang="pug">
div.absolute.bottom-0.pb-4.w-full.pr-12
  .bg-gray-100.rounded-t-xl.rounded-br-xl.p-4.mb-2
    span.text-sm.text-gray-600 Hello there, You can hire me by sending an email 
      a.text-indigo-600(href="#") here
  .rounded-full.w-8.h-8.bg-gray-200.bg-cover(:style="{backgroundImage:`url(${bio.photo1})`}")
</template>

<script setup>
import { inject } from 'vue'
const bio = inject('bio')
</script>
