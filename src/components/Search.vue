<template>
  <div class="search-box">
    <input type="text" v-model="searchText" placeholder="Wyszukaj" />
    <i class="fas fa-search"></i>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const searchText = ref("");

    watch(searchText, (newValue) => {
      // Wysyła frazę wyszukiwania do rodzica (RecipeList)
      // poprzez emitowanie zdarzenia
      emit("updateRecipes", newValue);
    });

    return { searchText };
  },
};
</script>

<style scoped>
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

@media (width <= 600px) {
  .search-box input {
    height: 80px;
  }
}
</style>
