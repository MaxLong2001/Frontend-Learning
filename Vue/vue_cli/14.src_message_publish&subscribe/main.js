import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// const eventBus = Vue.extend({})
// const bus = new eventBus()
// Vue.prototype.bus = bus

new Vue({
    render: h => h(App),
}).$mount('#app')
