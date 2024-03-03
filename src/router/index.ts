import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillView from "../views/SkillView.vue";
import UserView from "../views/UserView.vue";
import SkillCreateView from "../views/SkillCreateView.vue";
import SkillEditView from "../views/SkillEditView.vue";
import LandingView from "../views/LandingView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue"
import PathViewPrototype from "../views/PathViewPrototype.vue";

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
    {
        path: '/user/:id',
        name: 'user',
        component: UserView,
    },
    {
        path: '/skill/create',
        name: 'skillCreate',
        component: SkillCreateView,
    },
    {
        path: '/skill/edit/:id',
        name: 'skillEdit',
        component: SkillEditView,
    },

    {
        path: '/',
        name: 'home',
        component: LandingView,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },

    {
        path: '/signup',
        name: 'signup',
        component: SignupView,
    },
    {
        path: '/pathtest',
        name: 'pathtest',
        component: PathViewPrototype,
    }
    
];
const router = createRouter({
    history: createWebHistory(),
    routes

});

export default router; 