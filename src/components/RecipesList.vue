<template>
  <!-- search -->
  <div class="search-box">
    <input type="text" v-model="searchText" placeholder="Wyszukaj" />
    <i class="fas fa-search"></i>
  </div>

  <!-- Filters -->
  <div class="filter-container">
    <div class="filter">
      <div class="filter-box" @click="toggleActive(1)">
        <div class="box" :class="{ 'active-box': activeBoxes.includes(1) }">
          <img src="../assets/breakfast.png" alt="Ikonka śniadania" />
        </div>
        <span class="filter-name">Śniadanie</span>
      </div>
      <div class="filter-box" @click="toggleActive(2)">
        <div class="box" :class="{ 'active-box': activeBoxes.includes(2) }">
          <img src="../assets/meal.png" alt="Ikonka obiadu" />
        </div>
        <span class="filter-name">Obiad</span>
      </div>
      <div class="filter-box" @click="toggleActive(3)">
        <div class="box" :class="{ 'active-box': activeBoxes.includes(3) }">
          <img src="../assets/evening.webp" alt="Ikonka kolacji" />
        </div>
        <span class="filter-name">Kolacja</span>
      </div>
      <div class="filter-box" @click="toggleActive(4)">
        <div class="box" :class="{ 'active-box': activeBoxes.includes(4) }">
          <img src="../assets/deser.png" alt="Ikonka deseru" />
        </div>
        <span class="filter-name">Deser</span>
      </div>
    </div>
  </div>

  <!-- Recipe -->
  <div class="your-recipes">
    <h3>Twoje przepisy</h3>

    <div
      v-if="filteredRecipes && filteredRecipes.length > 0"
      class="recipe-container"
    >
      <div
        v-for="recipe in filteredRecipes"
        :key="recipe"
        class="single-recipe"
      >
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
import { ref, computed, watch } from "vue";
import Search from "../components/Search.vue";
import Filters from "../components/Filters.vue";
export default {
  components: { Search, Filters },
  props: ["recipes", "ingredient"],
  setup(props) {
    const searchRecipe = ref(null);

    const activeBoxes = ref([]);

    const searchText = ref("");

    const toggleActive = (index) => {
      const isActive = activeBoxes.value.includes(index);

      if (isActive) {
        activeBoxes.value = activeBoxes.value.filter((i) => i !== index);
      } else {
        activeBoxes.value.push(index);
      }
    };

    const filteredRecipes = computed(() => {
      if (!props.recipes) return [];

      const searchQuery = searchText.value.toLowerCase();
      const activeFilters = activeBoxes.value;

      return props.recipes.filter((recipe) => {
        const titleMatches = recipe.title.toLowerCase().includes(searchQuery);

        const filterMatches =
          activeFilters.length === 0 || activeFilters.includes(recipe.category);

        return titleMatches && filterMatches;
      });
    });

    return {
      searchRecipe,
      searchText,
      activeBoxes,
      toggleActive,
      filteredRecipes,
    };
  },
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
.search-box {
  padding: 0 20px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
}

.search-box input {
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 20px;
  background-color: #f3f0ea;
  padding: 0 20px 0 70px;
  font-size: 25px;
  color: rgb(107, 107, 107);
}

.search-box input:focus {
  border: 1px solid rgb(225, 195, 138);
}

.search-box i {
  position: absolute;
  top: 50%;
  font-size: 22px;
  left: 50px;
  transform: translateY(-50%);
  color: rgb(107, 107, 107);
}

.filter-container {
  padding: 0 20px;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 60px;
}
.filter {
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
}

.filter-box {
  position: relative;
}

.filter-container .box {
  width: 50px;
  height: 50px;
  background-color: #f3f0ea;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 1px rgba(156, 156, 156, 0.3);
  cursor: pointer;
}

.filter-container img {
  width: 70%;
}

.filter-name {
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: -30px;
  font-size: 15px;
  color: rgb(91, 91, 91);
}

.active-box {
  background-color: rgb(239, 179, 65);
  box-shadow: 5px 5px 1px rgba(202, 158, 36, 0.3);
}

@media (350px <= width) {
  .filter-container .box {
    width: 70px;
    height: 70px;
  }
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
@media (width <= 600px) {
  .search-box input {
    height: 80px;
  }
}

@media (600px <= width) {
  .filter-container .box {
    width: 80px;
    height: 80px;
  }
}
</style>
