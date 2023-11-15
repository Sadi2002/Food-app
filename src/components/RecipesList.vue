<template>
  <div class="your-recipes">
    <h3>Twoje przepisy</h3>
    <div class="recipe-container">
      <div v-for="recipe in recipes" :key="recipe" class="single-recipe">
        <router-link
          :to="{ name: 'SingleIngredient', params: { id: recipe.id } }"
        >
          <div class="recipe">
            <img :src="recipe.coverUrl" alt="" />
            <span class="recipe-title">{{ recipe.title }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["recipes"],
  setup() {},
};
</script>

<style scoped>
.recipe-container .recipe {
  height: 230px;
  overflow: hidden;
}

.recipe-container .recipe img {
  height: 100%;
}

.single-recipe {
  width: 100%;
}
</style>
