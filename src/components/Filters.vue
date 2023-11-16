<template>
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
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const activeBoxes = ref([]);

    const toggleActive = (index) => {
      const isActive = activeBoxes.value.includes(index);

      if (isActive) {
        activeBoxes.value = activeBoxes.value.filter((i) => i !== index);
      } else {
        activeBoxes.value.push(index);
      }
    };

    return {
      activeBoxes,
      toggleActive,
    };
  },
};
</script>

<style scoped>
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

.box {
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

img {
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
  .box {
    width: 70px;
    height: 70px;
  }
}

@media (600px <= width) {
  .box {
    width: 80px;
    height: 80px;
  }
}
</style>
