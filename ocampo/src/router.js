import Vue from 'vue'
import Router from 'vue-router'
import Member from './views/Member.vue'
import Home from './views/Home.vue'
import NewsPage from './views/NewsPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Members',
            name: 'member',
            component: Member
        },
        {
            path: '/NewsPage',
            name: 'newspage',
            component: NewsPage
        }
    ]
})    