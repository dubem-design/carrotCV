<template lang="pug">
div(class="text-center lg:text-left pt-8 md:pt-0")
  h1.text-4xl.font-bold.text-gray-800 {{bio.firstname}} 
  h1.text-4xl.font-bold.text-gray-800 {{bio.middlename}}
  h1.text-4xl.font-bold.text-gray-800 {{bio.lastname}}
  p.Building.text-gray-600.mt-4 {{bio.tagline}}
</template>

<script setup>
import { inject } from 'vue'
const bio = inject('bio')
</script>
