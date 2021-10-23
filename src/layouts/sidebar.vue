<template lang="pug">
.SiteHeader
.container
  .flex.flex-row
    div.pt-12.sticky.top-0.h-screen(class="hidden lg:block lg:w-3/12 xl:w-2/12" :class="{'border-r border-gray-200' : layoutSettings.bordered}")
      LeftNavBar(:navs="navs")
      Notify
    div.px-6(class="lg:px-12 w-full lg:w-9/12 xl:w-8/12")
      //- pre {{content}}
      slot
      CFooter
    div.pt-12.sticky.top-0.h-screen(class="hidden xl:block lg:w-1/12 xl:w-2/12")
      SocialBar
BottomNav(:navs="navs")
</template>

<script>
import LeftNavBar from '@comp/layout/LeftNavBar.vue'
import SocialBar from '@comp/layout/SocialBar.vue'
import Notify from '@comp/layout/Notify.vue'
import CFooter from '@comp/layout/CFooter.vue'
import BottomNav from '@comp/layout/BottomNav.vue'
import { inject } from 'vue'

export default {
    components: { LeftNavBar, SocialBar, Notify, CFooter, BottomNav },
    setup(props, context) {
        const content = inject('content')
        const navs = content.map((x) => x.menu)

        const layoutSettings = inject('layoutSettings')
        return { navs, content, layoutSettings }
    },
}
</script>
