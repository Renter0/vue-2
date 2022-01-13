import { createRouter, createWebHistory } from "vue-router";

import vBlockNews from "../components/v-block-news.vue";
import vSimpleNews from "../components/v-simple-news.vue";
import vDetailNews from "../components/v-detail-news.vue";

const routes = [
  {
    path: "/",
    name: "blockNews",
    component: vBlockNews,
  },
  {
    path: "/simple-news",
    name: "simpleNews",
    component: vSimpleNews,
    props: true,
  },
  {
    path: "/news",
    name: "news",
    component: vDetailNews,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
