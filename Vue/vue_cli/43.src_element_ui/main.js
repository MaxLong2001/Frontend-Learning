import Vue from 'vue'
import App from './App.vue'

// full import
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// on demand import
import { Button, Row, DatePicker } from 'element-ui';


Vue.config.productionTip = false

// full use
// Vue.use(ElementUI)

// on demand use
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

new Vue({
    render: h => h(App),
}).$mount('#app')
