import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Recipes from "../views/Recipes.vue";
import Recipe from "../views/Recipe.vue";
import Ingredient from "../components/Ingredient.vue";
import { projectAuth } from "@/firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "welcome" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: Recipes,
    beforeEnter: requireAuth,
  },
  {
    path: "/recipe",
    name: "Recipe",
    component: Recipe,
    beforeEnter: requireAuth,
  },
  {
    path: "/ingredient/:id",
    name: "Ingredient",
    component: Ingredient,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
