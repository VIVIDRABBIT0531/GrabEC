import Vue from "vue";
import VueRouter from "vue-router";
import Top from "@/views/Top.vue";
import Catalog from "@/views/Catalog";
import Cart from "@/views/Cart";
import NotFound from "@/views/NotFound.vue";
import Detail from "@/views/Detail";
import MenuDetail from "@/views/MenuDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Top",
    component: Top
  },
  {
    path: "/menu-detail",
    name: "MenuDetail",
    component: MenuDetail
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
    props: true
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
