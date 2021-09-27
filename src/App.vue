<template lang="pug">
div.bg-white
  component(:is="layout" )
    router-view
  button.fixed.text-gray-900(style="bottom:50px;right:50px" @click="nightwind.toggle()") 
    span.dark-mode-on  Dark
    span.dark-mode-off  Light
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import nightwind from 'nightwind/helper'

export default {
    setup() {
        const layout = computed(() => {
            return useRoute().meta.layout
        })

        const sectionObserver = ref(null)

        // onMounted(() => {
        //     this.observeSections()
        // })

        return {
            nightwind,
            sectionObserver,
            layout,
        }
    },
    mounted() {
        nightwind.init()
        // nightwind.toggle()
        // setTimeout(() => {
        //     this.observeSections()
        // }, 500)
    },
    methods: {
        observeSections() {
            try {
                if (this.sectionObserver !== null)
                    this.sectionObserver.disconnect()
            } catch (error) {
                console.log(error)
            }

            const options = {
                rootMargin: '0px 0px',
                threshold: 0,
            }
            this.sectionObserver = new IntersectionObserver(
                this.sectionObserverHandler,
                options
            )
            console.log('here')

            // Observe each section
            const sections = document.querySelectorAll('.section')
            sections.forEach((section) => {
                this.sectionObserver.observe(section)
            })
        },
        sectionObserverHandler(entries) {
            console.log('hnnn,')
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id
                    // Push sectionId to router here
                    this.$router.replace({
                        name: this.$route.name,
                        hash: `#${sectionId}`,
                    })
                }
            }
        },
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
