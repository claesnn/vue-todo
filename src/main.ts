import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import { VDataTable } from 'vuetify/labs/components'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const vuetify = createVuetify({
  components: {
    VDataTable,
    ...components
  },
  directives
})

app.use(vuetify)

app.mount('#app')
