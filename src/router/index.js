import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/EarningsView.vue"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/EarningsView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
