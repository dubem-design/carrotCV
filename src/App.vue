<template lang="pug">
.bg-gray-50
  component(:is="layout" )
    router-view
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const layout = computed(() => {
    return useRoute().meta.layout
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
