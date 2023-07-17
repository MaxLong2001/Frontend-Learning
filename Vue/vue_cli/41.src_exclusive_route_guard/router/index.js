import VueRouter from "vue-router";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";

const router = new VueRouter({
    routes: [
        {
            name: "about",
            path: "/about",
            component: About,
            meta: {
                title: 'About'
            }
        },
        {
            name: 'home',
            path: "/home",
            component: Home,
            meta: {
                title: 'Home'
            },
            children: [
                {
                    name: "news",
                    path: "news",
                    component: News,
                    meta: {
                        isAuth: true,
                        title: 'News'
                    },
                    beforeEnter(to, from, next) {
                        console.log('beforeEnter')
                        if (localStorage.getItem('school') === 'BUAA') {
                            next()
                        } else {
                            alert('Wrong School!')
                        }
                    }
                },
                {
                    name: "message",
                    path: "message",
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: 'Message'
                    },
                    children: [{
                        name: 'detail',
                        path: 'detail/:id/:title',
                        component: Detail,
                        meta: {
                            isAuth: true,
                            title: 'Detail'
                        },

                        // props:{
                        //     a: 'a',
                        //     b: 110
                        // }

                        // props: true // 将路由params参数映射为组件属性

                        props($route) {
                            return {
                                id: $route.params.id,
                                title: $route.params.title
                            }
                        }
                    }]
                }
            ]
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     console.log('beforeEach')
//     // if (to.name === 'news' || to.name === 'message') {
//     //     if (localStorage.getItem('school') === 'BUAA') {
//     //         next()
//     //     } else {
//     //         alert('Wrong School!')
//     //     }
//     // } else {
//     //     next()
//     // }
//
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'BUAA') {
//             next()
//         } else {
//             alert('Wrong School!')
//         }
//     } else {
//         next()
//     }
// })

router.afterEach((to) => {
    console.log('afterEach')
    document.title = to.meta.title || 'Vue App'
})

export default router