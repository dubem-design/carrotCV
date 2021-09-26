import { createApp } from 'vue'
import router from './router/index'
import registerIcons from './plugins/phosphor-vue'
import './index.css'

// import components
import App from './App.vue'
import SidebarLayout from './layouts/sidebar.vue'
import SectionTitle from '@comp/common/SectionTitle.vue'

// import content & config
import content, { bio, sectionObject } from './content/index'
import layoutSettings from '../STARTHERE'

const app = createApp(App).use(router)
registerIcons(app)

// GLOBAL COMPONENT & LAYOUTS
app.component('sidebar', SidebarLayout)
app.component('SectionTitle', SectionTitle)

// CONTENT
// making content available through out app
app.provide('content', content)
app.provide('bio', bio)
app.provide('sections', sectionObject)
app.provide('layoutSettings', layoutSettings)

app.mount('#app')
