import Home from "./components/Home.vue";
import PlanetDetails from "./components/PlanetDetails.vue";
import * as VueRouter from "vue-router";

const routes = [
    { path: "/", component: Home },
    { path: "/planet/:id", component: PlanetDetails },
];

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;
