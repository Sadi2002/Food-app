<template>
  <div class="profile">
    <div class="setting-back" @click="backToRecipes">
      <i class="fas fa-long-arrow-alt-left"></i>
    </div>
    <div class="changeImg" @click="openFileInput">
      <img src="../assets/user.png" alt="logo użytkownika" />
      <div class="camera"><i class="fas fa-camera"></i></div>
      <input @change="handleChange" type="file" style="display: none" />
    </div>
    <p v-if="showError" class="error">{{ fileError }}</p>

    <div class="changeInput">
      <form>
        <div class="changeInput-box">
          <label for="name">Imię</label>
          <input type="text" placeholder="Wpisz imię" />
        </div>
        <div class="changeInput-box">
          <label for="name">Email</label>
          <input type="email" placeholder="Wpisz email" />
        </div>
        <div class="changeInput-box">
          <label for="name">Hasło</label>
          <input type="password" placeholder="Wpisz hasło" />
        </div>
      </form>
    </div>
    <div class="save">
      <button>Zapisz</button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const file = ref(null);
    const fileError = ref(null);
    const showError = ref(false);

    onMounted(() => {
      if (route.path === "/edit") {
        document.body.style.backgroundColor = "white";
        document.body.style.overflowY = "visible";
      } else if (route.path === "/welcome") {
        document.body.style.backgroundColor = "#ea7649";
      }
    });

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
    };

    const backToRecipes = () => {
      router.push({ path: "/account" });
    };

    return { handleChange, file, fileError, showError, backToRecipes };
  },
};
</script>

<style scoped>
.profile {
  padding: 50px;
  position: relative;
  font-family: "Roboto", sans-serif;
}

.changeImg {
  position: relative;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
}
.changeImg img {
  width: 100px;
}

.camera {
  width: 60px;
  height: 60px;
  background-color: rgb(231 135 76);
  border-radius: 50%;
  position: absolute;
  right: 10%;
  transform: translateX(50%);
  top: -20%;
  border: 5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.camera i {
  font-size: 25px;
  color: #fff;
}

input[type="file"] {
  margin-top: 30px;
}

.changeInput {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.changeInput-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

.error {
  margin-top: 60px;
  position: absolute;
  left: -35px;
}

form {
  width: 100%;
}

label {
  text-align: left;
  font-size: 20px;
  color: #3b3b3b;
}

.changeInput-box input {
  height: 50px;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 0 20px;
}

.setting-back {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgb(231 135 76);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
}

.setting-back i {
  font-size: 20px;
  color: white;
}

.save button {
  width: 200px;
  height: 50px;
  background: #ea7649;
  color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: none;
  font-size: 20px;
  margin-top: 30px;

  transition: all 0.3s;
}

.save button:hover {
  background-color: #3b3b3b;
}

@media (400px <= width) {
  .camera {
    right: 20%;
  }
}
@media (500px <= width) {
  .camera {
    right: 30%;
  }
}
@media (700px <= width) {
  .camera {
    right: 35%;
  }
}
</style>
