<template>
  <div class="create-recipe">
    <div @click="backToHome" class="back">
      <i class="fas fa-long-arrow-alt-left"></i>Wróć
    </div>
    <h1>Tu się wszystko <span class="colored-red">zaczyna!</span></h1>
    <form @submit.prevent="sendRecipe">
      <div class="recipe-box">
        <label>Nazwa potrawy</label>
        <input
          type="text"
          required
          placeholder="Wpisz nazwę potrawy"
          v-model="title"
        />
      </div>
      <div class="recipe-box">
        <label>Opis</label>
        <textarea
          type="text"
          required
          placeholder="Opisz potrawę"
          v-model="desciption"
        />
      </div>
      <div class="recipe-box">
        <label>Wybierz zdjęcie</label>
        <input @change="handleChange" type="file" required />
        <p v-if="showError" class="error">{{ fileError }}</p>
      </div>
      <div class="recipe-box">
        <label>Wypisz składniki</label>
        <input
          type="text"
          placeholder="Odziel składniki przecinkami"
          v-model="ingredients"
        />
        <RecipesList :ingredient="ingredients" />
      </div>
      <div class="recipe-box">
        <label>Rodzaj potrawy</label>
        <select v-model="tag" required>
          <option>Śniadanie</option>
          <option>Obiad</option>
          <option>Kolacja</option>
          <option>Deser</option>
        </select>
      </div>

      <button v-if="!isSending">Dodaj potrawę</button>
      <button class="sending" v-else disabled><div></div></button>
    </form>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { projectFirestore } from "@/firebase/config";
import { useStorage } from "../composables/useStorage";
import { getUser } from "@/composables/getCurrentUser";

import { RecipesList } from "../components/RecipesList.vue";
export default {
  components: { RecipesList },
  setup() {
    const title = ref("");
    const desciption = ref("");
    const tag = ref("");
    const ingredientInput = ref("");

    const file = ref(null);
    const fileError = ref(null);
    const showError = ref(false);
    const isSending = ref(false);

    const ingredients = ref([]);

    const { user } = getUser();

    const router = useRouter();

    const { url, filePath, uploadImg } = useStorage();

    const backToHome = () => {
      router.push({ path: "/recipes" });
    };

    const sendRecipe = async () => {
      if (file.value) {
        isSending.value = true;
        await uploadImg(file.value);

        const inputIngredients = ingredients.value.split(",");
        const trimmedIngredients = inputIngredients.map((ingredient) =>
          ingredient.trim()
        );

        // Dodaj składniki do listy
        ingredients.value = trimmedIngredients;

        const recipe = {
          title: title.value,
          description: desciption.value,
          tag: tag.value,
          id: user.value.uid,
          coverUrl: url.value,
          filePath: filePath.value,
          ingredients: trimmedIngredients,
        };

        const res = await projectFirestore.collection("recipes").add(recipe);
      } else {
        isSending.value = false;
      }

      try {
        await router.push({ path: "/recipes" });
      } catch (err) {
        console.log(err.message);
      }
    };

    const allowedImgType = ["image/png", "image/jpg", "image/jpeg"];

    const handleChange = (e) => {
      const selectedImg = e.target.files[0];
      if (selectedImg && allowedImgType.includes(selectedImg.type)) {
        file.value = selectedImg;
        fileError.value = null;
        showError.value = false;
      } else {
        showError.value = true;
        file.value = null;
        fileError.value =
          "Wybierz zdjęcie z poprawnym rozszerzeniem (png, jpg, jpeg)";
      }

      console.log(ingredients.value);
    };

    onMounted(() => {
      const path = window.location.pathname;

      if (path !== "/") {
        document.body.style.backgroundColor = "white";
      }
    });

    return {
      title,
      desciption,
      tag,
      file,
      backToHome,
      sendRecipe,
      handleChange,
      fileError,
      url,
      filePath,
      uploadImg,
      isSending,
      showError,
      ingredientInput,
      ingredients,
    };
  },
};
</script>

<style scoped>
.create-recipe {
  width: 100%;
  min-height: 100vh;
  border-radius: 0;
  background-color: white;
  padding: 0 30px 30px 30px;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding-top: 50px;
}

form {
  width: 100%;
}

h1 {
  font-size: 30px;
}

.recipe-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
}

input,
textarea {
  height: 70px;
  padding: 0 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid grey;
}

textarea {
  padding-top: 20px;
}

label {
  text-align: left;
  font-size: 20px;
}

select {
  height: 70px;
  font-size: 20px;
  padding: 0 20px;
  border-radius: 10px;
}

option {
  font-size: 20px;
}

button {
  width: 100%;
  height: 70px;
  background-color: rgb(231 135 76);
  color: #fff;
  border-radius: 20px;
  border: none;
  font-size: 22px;
  margin-top: 30px;
  transition: all 0.3s;
  cursor: pointer;
}

button:hover {
  background-color: #3b3b3b;
}

.back {
  width: 100%;
  text-align: left;
  font-size: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  cursor: pointer;
}

.back i {
  color: rgb(231 135 76);
}

input[type="file"] {
  border: none;
  padding-left: 5px;
  height: 40px;
}

.sending {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sending div {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  border-top: 3px solid white;
  animation: spin 1.2s infinite;
}

@media (450px <= width) {
  h1 {
    font-size: 40px;
  }
  label {
    font-size: 23px;
  }
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
