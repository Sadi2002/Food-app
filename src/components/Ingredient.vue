<template>
  <div class="ingredient">
    <div class="ingredient-back">
      <i class="fas fa-long-arrow-alt-left"></i>
    </div>
    <div class="ingredient-img-box">
      <img
        class="ingredient-img"
        :src="recipe ? recipe.coverUrl : null"
        alt="Zdjęcie potrawy"
      />
    </div>
    <div class="ingredient-box">
      <span class="ingredient-tag">{{ recipe ? recipe.tag : null }}</span>
      <p class="ingredient-title">{{ recipe ? recipe.title : null }}</p>
      <div class="ingredient-choose">
        <div class="ingredient-description-box">
          <p
            @click="switchOption1"
            :class="{ show: showOption1 }"
            class="ingredient-description"
          >
            Opis
          </p>
        </div>
        <div class="ingredient-element-box">
          <p
            @click="switchOption2"
            :class="{ show: showOption2 }"
            class="ingredient-element"
          >
            Składniki
          </p>
        </div>
      </div>
      <div class="ingredient-options">
        <div v-if="showOption1" class="ingredient-option1">
          <span class="ingredient-desc" ref="desc">
            {{
              recipe ? capitalizeFirstLetter(recipe.description) : null
            }}</span
          >
        </div>
        <div v-if="showOption2" class="ingredient-option2">
          <span class="ingredient-el">{{
            recipe ? recipe.ingredients : null
          }}</span>
        </div>
      </div>
    </div>
    <!-- <h1>{{ recipe ? recipe.coverUrl : null }}</h1> -->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStorage } from "../composables/useStorage";

export default {
  props: ["recipe"],
  setup() {
    const { url, filePath, uploadImg } = useStorage();

    const showOption1 = ref(true);
    const showOption2 = ref(false);
    const desc = ref(null);

    const switchOption1 = () => {
      showOption2.value = false;
      showOption1.value = true;
    };
    const switchOption2 = () => {
      showOption1.value = false;
      showOption2.value = true;
    };

    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    onMounted(() => {
      const path = window.location.pathname;

      if (path !== "/") {
        document.body.style.backgroundColor = "white";
      }
    });

    return {
      url,
      filePath,
      uploadImg,
      switchOption1,
      showOption2,
      showOption1,
      switchOption2,
      desc,
      capitalizeFirstLetter,
    };
  },
};
</script>
<style scoped>
.ingredient {
  width: 100%;
  font-family: "Roboto", sans-serif;
  position: relative;
}
.ingredient .ingredient-img {
  border-radius: 0;
  position: relative;
}

.ingredient-img-box {
  position: relative;
  height: 300px;
}

.ingredient-img-box img {
  height: 100%;
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
  height: 100%;
  background: #fff;
  border-radius: 30px 30px 0 0;
  position: relative;
  top: -30px;
  padding: 20px 30px;
  overflow: hidden;
  overflow-y: scroll;
  flex-grow: 1;
}

.ingredient-box::-webkit-scrollbar {
  width: 0;
}

.ingredient-tag {
  display: inline-block;
  padding: 5px 20px;
  background: #e5a891;
  color: #fff;
  border-radius: 20px;
  margin-bottom: 10px;
}

.ingredient-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
}

.ingredient-choose {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 30px;
  gap: 15px;
  border-bottom: 1px solid #dbdad8;
}

.ingredient-element-box,
.ingredient-description-box {
  width: 50%;
  cursor: pointer;
}

.ingredient-description,
.ingredient-element {
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 15px;
  color: #3b3b3b;
  background-color: #f3f0ea;
  margin-bottom: 30px;
}

.ingredient-desc {
  font-size: 18px;
  text-align: left;
}

.ingredient-options {
  display: flex;
  justify-content: flex-start;
}

.show {
  color: #fff;
  background-color: #ea7649;
}

.ingredient-back {
  position: absolute;
  top: 30px;
  left: 30px;
  background: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
}

.ingredient-back i {
  font-size: 25px;
}
</style>
