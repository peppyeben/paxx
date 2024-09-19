import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/EarningsView.vue"),
    },
    {
        path: "/transactions",
        name: "transactions",
        component: () => import("../views/TransactionsView.vue"),
    },
    {
        path: "/earnings",
        name: "earnings",
        component: () => import("../views/EarningsView.vue"),
    },
    {
        path: "/create",
        name: "create",
        component: () => import("../views/CreateView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
