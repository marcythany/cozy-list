import '@/styles/globals.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { clerkPlugin } from 'vue-clerk/plugin'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Plugins
app.use(createPinia())
app.use(clerkPlugin, {
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
})

// Router
app.use(router)

// Mount the app
app.mount('#app')
