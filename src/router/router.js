import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import UserAuthView from "../views/UserAuthView.vue";
import RecipesListView from "../views/RecipesListView.vue";
import RecipeCardView from "../views/RecipeCardView.vue";
import MealPlannerView from "../views/MealPlannerView.vue";
import TestFieldView from "../views/TestFieldView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/test", name: "test", component: TestFieldView },
  { path: "/user-auth", name: "userAuth", component: UserAuthView },
  { path: "/recipe-list", name: "recipeList", component: RecipesListView },
  { path: "/recipe-list/:id", name: "recipeCard", component: RecipeCardView },
  { path: "/meal-planner", name: "mealPlanner", component: MealPlannerView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
