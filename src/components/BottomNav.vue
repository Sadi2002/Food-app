<template>
  <div class="bottom-nav">
    <div class="bottom-nav-box"><i class="fas fa-home"></i></div>
    <div @click="openCreateRecipe" class="bottom-nav-box plus">
      <i class="fas fa-plus"></i>
    </div>
    <div @click="openSettings" class="bottom-nav-box">
      <i class="fas fa-user"></i>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const openCreateRecipe = () => {
      router.push({ name: "Recipe" });
    };

    const openSettings = () => {
      router.push({ name: "Account" });
    };

    return { openCreateRecipe, openSettings };
  },
};
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: #3b3b3b;
  color: white;
  height: 70px;
  z-index: 100;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 700px;
}

.bottom-nav-box {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}

.bottom-nav-box:hover i {
  color: #ff9357;
}

div i {
  font-size: 30px;
  transition: all 0.3s;
}

.plus {
  background-color: #ff9357;
  position: relative;
  top: -32px;
  width: 70px;
  height: 70px;
  transform: rotate(45deg) scale(1);
  border-radius: 15px;
  box-shadow: 0 0 10px #ff9357;
}

.plus:hover {
  animation: puls 1s infinite;
  animation-fill-mode: both;
}

.plus:hover i {
  color: #fff;
}

.plus i {
  color: white;
  transform: rotate(45deg);
}

.bottom-nav-box:first-of-type i {
  color: #ff9357;
}

@media (700px <= width) {
  .bottom-nav {
    border-radius: 20px 20px 0 0;
  }
}

@keyframes puls {
  0% {
    transform: rotate(45deg) scale(1);
    box-shadow: 0 0 10px #ff9357;
  }
  50% {
    transform: rotate(45deg) scale(1.1);
    box-shadow: 0 0 20px #ff9357;
  }
  100% {
    transform: rotate(45deg) scale(1);
    box-shadow: 0 0 10px #ff9357;
  }
}
</style>
