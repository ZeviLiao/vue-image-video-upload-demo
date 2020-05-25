import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import VueYouTubeEmbed from 'vue-youtube-embed'
// if you want to install the component globally with a different name
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
