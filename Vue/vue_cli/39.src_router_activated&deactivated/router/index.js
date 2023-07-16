import VueRouter from "vue-router";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";

export default new VueRouter({
    routes: [
        {
            name: "about",
            path: "/about",
            component: About
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news",
                    component: News,
                },
                {
                    path: "message",
                    component: Message,
                    children: [{
                        name: 'detail',
                        path: 'detail/:id/:title',
                        component: Detail,

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