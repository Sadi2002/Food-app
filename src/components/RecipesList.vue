<template>
  <div class="your-recipes">
    <h3>Twoje przepisy</h3>
    <div v-if="recipes && recipes.length > 0" class="recipe-container">
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
    <p v-else class="no-recipes">Obecnie nie posiadasz żadnych przepisów!</p>
  </div>
</template>

<script>
export default {
  props: ["recipes", "ingredient"],
  setup() {},
};
</script>

<style scoped>
.recipe-container {
  gap: 15px;
}
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

.no-recipes {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #a3a2a2;
  margin-top: 30px;
  font-size: 16px;
}

.your-recipes {
  position: relative;
}

@media (400px <= width) {
  .single-recipe {
    width: 48%;
  }

  .single-recipe .recipe {
    width: 100%;
  }
  .recipe-container {
    gap: 0px;
  }
}

@media (500px <= width) {
  .no-recipes {
    font-size: 20px;
  }
}
</style>
