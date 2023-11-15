<template>
  <Ingredient :recipe="recipe" />
</template>

<script>
import { useRoute } from "vue-router";
import Ingredient from "../components/Ingredient.vue";
import { getRecipe } from "../composables/getRecipe";

export default {
  components: { Ingredient },
  props: ["id"],

  setup(props) {
    const route = useRoute();

    const { recipe, error, load } = getRecipe(route.params.id);
    load();

    return { recipe, error };
  },
};
</script>

<style></style>
