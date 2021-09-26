<template lang="pug">
div
  component(:is="layout" )
    router-view
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

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
            sectionObserver,
            layout,
        }
    },
    mounted() {
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
