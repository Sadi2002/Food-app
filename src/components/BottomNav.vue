<template>
  <div class="bottom-nav">
    <div class="bottom-nav-box"><i class="fas fa-home"></i></div>
    <div class="bottom-nav-box plus"><i class="fas fa-plus"></i></div>
    <div class="bottom-nav-box"><i class="fas fa-user"></i></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0px;
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
}

.bottom-nav-box {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

div i {
  font-size: 30px;
}

.plus {
  background-color: #ff9357;
  position: relative;
  top: -32px;
  width: 70px;
  height: 70px;
  transform: rotate(45deg);
  border-radius: 15px;
  box-shadow: 0 0 10px #ff9357;
}

.plus i {
  color: white;
  transform: rotate(45deg);
}
</style>
