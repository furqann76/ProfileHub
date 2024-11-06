// client/src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import AddUser from './components/AddUser.vue';
import UserProfile from './components/UserProfile.vue';

import school from './components/schoolList.vue';
import Addschool from './components/Addschool.vue';
import schoolProfile from './components/schoolProfile.vue';
const routes = [
    { path: '/', component: Home },
    { path: '/add-user', component: AddUser },
    { path: '/user/:id', component: UserProfile },
    { path: '/school', component: school },
    { path: '/add-school', component: Addschool },
    { path: '/school/:id', component: schoolProfile }
];



const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
