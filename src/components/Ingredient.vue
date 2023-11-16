<template>
  <div class="ingredient">
    <div class="ingredient-img-box">
      <img
        class="ingredient-img"
        :src="recipe ? recipe.coverUrl : null"
        alt="Zdjęcie potrawy"
      />
    </div>
    <div class="ingredient-box">
      <span class="ingredient-tag">{{ recipe.tag }}</span>
    </div>
    <!-- <h1>{{ recipe ? recipe.coverUrl : null }}</h1> -->
  </div>
</template>

<script>
import { useStorage } from "../composables/useStorage";

export default {
  props: ["recipe"],
  setup() {
    const { url, filePath, uploadImg } = useStorage();

    return { url, filePath, uploadImg };
  },
};
</script>
<style>
.ingredient {
  width: 100%;
}
.ingredient .ingredient-img {
  border-radius: 0;
  position: relative;
}

.ingredient-img-box {
  position: relative;
}

.ingredient-img-box::after {
  content: "";
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
}

.ingredient-box {
  min-height: 400px;
  background: #fff;
  border-radius: 30px 30px 0 0;
  position: relative;
  top: -30px;
}

.ingredient-tag {
  display: inline-block;
}
</style>
