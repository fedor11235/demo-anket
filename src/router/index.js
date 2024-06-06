import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "authorization" },
  },
  {
    path: "/authorization",
    name: "authorization",
    component: () => import("@/views/AuthorizationPage.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("@/views/RegistrationPage.vue"),
  },
  {
    path: "/access",
    name: "access",
    component: () => import("@/views/AccessPage.vue"),
  },
  {
    path: "/hello",
    name: "hello",
    component: () => import("@/views/HelloPage.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/MainPage.vue"),
  },
  {
    path: "/captcha",
    name: "captcha",
    component: () => import("@/views/CaptchaPage.vue"),
  },
  {
    path: "/finish",
    name: "finish",
    component: () => import("@/views/FinishPage.vue"),
  },
  {
    path: "/result",
    name: "result",
    component: () => import("@/views/ResultsPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
