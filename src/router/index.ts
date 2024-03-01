import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillView from "../views/SkillView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/skill/:id',
        name: 'skill',
        component: SkillView,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes

});

export default router; 