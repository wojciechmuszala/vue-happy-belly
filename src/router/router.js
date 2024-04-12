import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import UserAuthView from "../views/UserAuthView.vue";
import RecipesListView from "../views/RecipesListView.vue";
import MealPlannerView from "../views/MealPlannerView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/user-auth", component: UserAuthView },
  { path: "/recipes", component: RecipesListView },
  { path: "/meal-planner", component: MealPlannerView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
