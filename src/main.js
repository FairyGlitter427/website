import { createApp } from 'vue'
import App from './App.vue'

import { library} from '@fortawesome/fontawesome-svg-core'
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons'


library.add(faPlay, faPause);

createApp(App).mount('#app')

App.component('font-awesome-icon', library)