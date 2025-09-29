import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UserPage.vue"),
      // children: [
      //   {
      //     path: "posts",
      //     component: () => import("../views/PostsPage.vue"),
      //   },
      //   {
      //     path: "posts/:id",
      //     name: "post",
      //     component: () => import("../views/PostPage.vue"),
      //   },
      // ],
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("../views/PostsPage.vue"),
    },
    {
      path: "/posts/:id",
      name: "post",
      component: () => import("../views/PostPage.vue"),
    },
  ],
});

export default router;
