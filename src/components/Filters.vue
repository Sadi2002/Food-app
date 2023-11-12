<template>
  <div class="filter-container">
    <div class="filter">
      <div class="box">
        <img src="../assets/breakfast.png" alt="" />
      </div>
      <div class="box">
        <img src="../assets/meal.png" alt="" />
      </div>
      <div class="box">
        <img src="../assets/evening.webp" alt="" />
      </div>
      <div class="box">
        <img src="../assets/deser.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.filter-container {
  padding: 0 20px;
  margin-top: 20px;
}
.filter {
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
}

.box {
  width: 70px;
  height: 70px;
  background-color: #f3f0ea;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

img {
  width: 80%;
}
</style>
