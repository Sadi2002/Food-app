<template>
  <div class="your-recipes">
    <h3>Twoje przepisy</h3>
    <div class="recipe-container">
      <div class="recipe">
        <img src="../assets/pomidorówka.jpeg" alt="" />
        <span class="recipe-title">Pomidorówka</span>
      </div>
      <div class="recipe">
        <img src="../assets/schabowy.jpeg" alt="" />
        <span class="recipe-title">Schabowy z ziemniakami</span>
      </div>
      <div class="recipe">
        <img src="../assets/lody.jpeg" alt="" />
        <span class="recipe-title">Lody włoskie</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.your-recipes {
  padding: 0 20px;
  font-family: "Roboto", sans-serif;
  padding-bottom: 50px;
}
h3 {
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
}

.recipe-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recipe {
  width: 100%;
  height: 200px;
  background-color: rgb(237 235 231);
  border-radius: 15px;
  margin-bottom: 20px;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.recipe-title {
  position: absolute;
  bottom: 0%;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 0 10px;
  font-size: 20px;
  color: rgb(64, 64, 64);
}

@media (400px <= width) {
  .recipe {
    width: 48%;
  }

  .recipe-container {
    gap: 0px;
  }
}
</style>
