import Vue from "vue";
import Router from "vue-router";
const Home = () => import('../pages/home');

Vue.use(Router);

export default new Router({
    linkActiveClass: "active",
    mode: "history",
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/douyu',
            redirect: 'https://www.douyu.com/4835718'
        }
    ]
});