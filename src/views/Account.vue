<template>
  <div class="setting">
    <div class="setting-back" @click="backToRecipes">
      <i class="fas fa-long-arrow-alt-left"></i>
    </div>
    <div class="about-you">
      <img src="../assets/user.png" alt="zdjęcie uzytkownika" />
      <h2 class="about-you-title">{{ user.displayName }}</h2>
      <p class="about-you-email">{{ user.email }}</p>
      <button @click="goToEdit" class="changeData">Edytuj dane</button>
    </div>
    <div class="setting-general">
      <div class="general-box">
        <div class="theme-container">
          <p class="theme">Ciemny motyw</p>
          <div
            @click="toggleSlider"
            :class="{ active: isActive }"
            class="slider"
          >
            <div :class="{ active: isSliderActive }" class="slider-ball"></div>
          </div>
        </div>
      </div>
      <!-- <div class="language-box">
        <label for="language">Wybierz język:</label>
        <select id="language" v-model="selectedLanguage">
          <option value="pl">Polski</option>
          <option value="en">Angielski</option>
        </select>
      </div> -->
      <div class="share-recipes"></div>
    </div>
    <button @click="handleLogout" class="log-out">Wyloguj się</button>
    <button @click="removeAccount" class="delete-account">Usuń konto</button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getUser } from "../composables/getCurrentUser";
import { useLogout } from "../composables/useLogout";
import { projectAuth } from "@/firebase/config";

export default {
  setup() {
    const { user } = getUser();
    const { logout } = useLogout();

    const handleLogout = async () => {
      logout();
      router.push({ path: "/" });
      document.body.style.backgroundColor = "#ea7649";
    };

    const removeAccount = async () => {
      try {
        const user = projectAuth.currentUser;

        console.log(user);

        if (user) {
          await user.delete();
          router.push({ path: "/" });
          if (route.path === "/recipes") {
            document.body.style.backgroundColor = "#ea7649";
          }
        } else {
          console.error("Użytkownik nie jest zalogowany.");
        }
      } catch (error) {
        console.error("Błąd podczas usuwania konta:", error.message);
      }
    };

    const route = useRoute();
    const router = useRouter();

    const goToEdit = () => {
      router.push({ path: "/edit" });
    };

    const isActive = ref(false);

    onMounted(() => {
      if (route.path === "/account") {
        document.body.style.backgroundColor = "white";
        document.body.style.overflowY = "visible";
      } else if (route.path === "/welcome") {
        document.body.style.backgroundColor = "#ea7649";
      }
    });

    const toggleSlider = () => {
      isActive.value = !isActive.value;
      // Dodaj dynamiczną klasę do body w zależności od wartości isActive
      document.body.classList.toggle("dark-bg", isActive.value);
      document.body.classList.toggle("light-bg", !isActive.value);
    };

    const backToRecipes = () => {
      router.push({ path: "/recipes" });
    };

    console.log(user.value);

    return {
      user,
      backToRecipes,
      isActive,
      toggleSlider,
      goToEdit,
      logout,
      handleLogout,
      removeAccount,
    };
  },
};
</script>

<style>
body.dark-bg {
  background-color: #333;
  color: white;
}

body.light-bg {
  background-color: #fff;
  color: #333;
}
.setting {
  width: 100%;
  font-family: "Roboto", sans-serif;
  position: relative;
}
.about-you {
  width: 100%;
  height: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-bottom: 50px;
}

.about-you img {
  width: 70px;
  margin-bottom: 20px;
}

.about-you-title {
  font-size: 30px;
}

.about-you-email {
  margin-bottom: 0;
  margin-bottom: 20px;
  color: rgb(157, 157, 157);
  font-size: 20px;
}

.changeData {
  width: 140px;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(231 135 76);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.changeData:hover {
  background-color: #3b3b3b;
}

.setting-general {
  padding: 0 30px;
  text-align: left;
}

.general {
  width: 100%;
  height: 40px;
  background: rgb(234, 234, 234);
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding-left: 20px;
  color: #727272;
  margin-bottom: 30px;
}

.theme-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.theme,
label[for="language"] {
  font-size: 18px;
  color: #5b5b5b;
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

.slider {
  width: 60px;
  height: 30px;
  background-color: rgb(195, 195, 195);
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5px;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
}

.slider-ball {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  transform: translateX(0);
  transition: all 0.3s;
}

.slider.active {
  background: rgb(231 135 76);
}

.language-box {
  display: flex;
  justify-content: space-between;
}

.slider.active .slider-ball {
  transform: translateX(30px);
}

.log-out,
.delete-account {
  width: 200px;
  height: 50px;
  background: rgb(231 135 76);
  color: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: none;
  font-size: 20px;
  margin-top: 100px;
  position: relative;
  top: -20px;
  transition: all 0.3s;
}

.log-out:hover,
.delete-account {
  background-color: rgb(231 135 76);
}

.delete-account {
  background: rgb(223, 89, 89);
  margin-top: 30px;
}
</style>
