import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'//makesStateService available to the rest of the App

import router from '@/router'//imports index.js file from the router directory

import 'leaflet/dist/leaflet.css'//leaflet stylesheets will be loaded by the time a map is clicked on

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService//"$stateService" is creating a new global property

app.use(router)//tells app.vue to use router

app.mount('#app')









