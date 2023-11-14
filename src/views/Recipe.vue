<template>
  <div class="recipe">
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
        <p class="error">{{ fileError }}</p>
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
      <button>Dodaj potrawę</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { projectFirestore } from "@/firebase/config";
export default {
  setup() {
    const title = ref("");
    const desciption = ref("");
    const tag = ref("");
    const file = ref(null);
    const fileError = ref(null);
    const router = useRouter();

    const backToHome = () => {
      router.push({ path: "/recipes" });
    };

    const sendRecipe = async () => {
      const recipe = {
        title: title.value,
        desciption: desciption.value,
        tag: tag.value,
      };

      const res = await projectFirestore.collection("recipes").add(recipe);

      console.log(title.value, desciption.value, file.value, tag.value);

      router.push({ path: "/recipes" });
    };

    const allowedImgType = ["image/png", "image/jpg", "image/jpeg"];

    const handleChange = (e) => {
      const selectedImg = e.target.files[0];
      if (selectedImg && allowedImgType.includes(selectedImg.type)) {
        file.value = selectedImg;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value =
          "Wybierz zdjęcie z poprawnym rozszerzeniem (png, jpg, jpeg)";
      }
    };

    return {
      title,
      desciption,
      tag,
      file,
      backToHome,
      sendRecipe,
      handleChange,
      fileError,
    };
  },
};
</script>

<style scoped>
.recipe {
  width: 100%;
  height: 100vh;
  border-radius: 0;
  background-color: white;
  padding: 0 30px 30px 30px;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
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
}

.back i {
  color: rgb(231 135 76);
}

input[type="file"] {
  border: none;
  padding-left: 5px;
  height: 40px;
}

@media (450px <= width) {
  h1 {
    font-size: 40px;
  }
  label {
    font-size: 23px;
  }
}
</style>
