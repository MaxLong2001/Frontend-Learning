export default {
    install(Vue, options) {
        console.log(Vue)
        console.log(options)

        Vue.filter('mySlice', function (value) {
            return value.slice(0, 5)
        })

        Vue.directive('myFocus', {
            inserted: function (el) {
                el.focus()
            },
            update: function (el, binding) {
                el.focus()
                el.value = binding.value
            },
            bind: function (el, binding) {
                el.value = binding.value
            }
        })

        Vue.mixin({
            data() {
                return {
                    mixin2: 'mixin2'
                }
            }
        })

        Vue.prototype.hello = ()=>{
            alert('Hello')
        }
    }
}