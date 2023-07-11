import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// const eventBus = Vue.extend({})
// const bus = new eventBus()
// Vue.prototype.bus = bus

new Vue({
    render: h => h(App),
    beforeCreate() {
        // register global event bus
        Vue.prototype.$bus = this
    }
}).$mount('#app')
