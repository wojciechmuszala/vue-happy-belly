import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import RecipesListView from "../views/RecipesListView.vue";
import UserAuthView from "../views/UserAuthView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/user-auth", component: UserAuthView },
  { path: "/recipes", component: RecipesListView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
