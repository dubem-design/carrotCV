<template lang="pug">
.container
  .flex.flex-row
    div.pt-12.sticky.top-0.h-screen(class="w-2/12" :class="{'border-r' : layoutSettings.bordered}")
      LeftNavBar(:navs="navs")
      Notfiy
    div.px-12(class="w-8/12")
      .sticky.top-0.pt-12.bg-gradient-to-b.from-white.to-transparent
      //- pre {{content}}
      slot
      .sticky.bottom-0.p-10.bg-gradient-to-b.from-transparent.to-white
      CFooter
    div.pt-12.sticky.top-0.h-screen(class="w-2/12")
      SocialBar
</template>

<script>
import LeftNavBar from '@comp/layout/LeftNavBar.vue'
import SocialBar from '@comp/layout/SocialBar.vue'
import Notfiy from '@comp/layout/Notfiy.vue'
import CFooter from '@comp/layout/CFooter.vue'
import { inject } from 'vue'

export default {
    components: { LeftNavBar, SocialBar, Notfiy, CFooter },
    setup(props, context) {
        const content = inject('content')
        const navs = content.map((x) => x.menu)

        const layoutSettings = inject('layoutSettings')
        return { navs, content, layoutSettings }
    },
}
</script>
