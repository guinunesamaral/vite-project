import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: "index",
            path: "/",
            component: () => import("../pages/index.vue"),
        },
        {
            name: "login",
            path: "/login",
            component: () => import("../pages/login.vue"),
        },
        {
            name: "reset",
            path: "/reset",
            component: () => import("../pages/reset.vue"),
        },
    ],
});

export default router;
