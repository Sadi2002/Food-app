<template>
  <div class="your-recipes">
    <h3>Twoje przepisy</h3>
    <div class="recipe-container">
      <div v-for="recipe in recipes" :key="recipe" class="single-recipe">
        <router-link :to="{ name: 'Ingredient', params: { id: recipe.id } }">
          <div v-for="rec in recipes" :key="rec.id" class="recipe">
            <img :src="rec.coverUrl" alt="" />
            <span class="recipe-title">{{ rec.title }}</span>
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
