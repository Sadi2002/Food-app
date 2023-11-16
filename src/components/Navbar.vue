<template>
  <nav v-if="user">
    <h1 class="nav-title">
      Hi, <span class="colored-red">{{ user.displayName }}</span>
    </h1>
    <img src="../assets/user.png" alt="" />
  </nav>
</template>

<script>
import { onMounted } from "vue";
import { getUser } from "../composables/getCurrentUser.js";
import { useRoute } from "vue-router";
export default {
  setup() {
    const { user } = getUser();

    const route = useRoute();

    onMounted(() => {
      if (route.path === "/recipes") {
        document.body.style.backgroundColor = "white";
        document.body.style.overflowY = "visible";
      } else if (route.path === "/welcome") {
        document.body.style.backgroundColor = "#ea7649";
      }
    });

    return { user };
  },
};
</script>

<style scoped>
nav {
  background-color: white;
  height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  font-family: "Roboto", sans-serif;
}

.nav-title {
  font-size: 35px;
  font-weight: bold;
}

img {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

body.path-recipes {
  background-color: blue;
}
</style>
