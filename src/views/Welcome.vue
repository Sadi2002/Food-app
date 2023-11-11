<template>
  <div class="welcome">
    <div class="welcome-top">
      <WelcomeImg />
      <WelcomeButtons />
    </div>
  </div>
</template>

<script>
import WelcomeImg from "../components/WelcomeImg.vue";
import WelcomeButtons from "../components/WelcomeButtons.vue";
export default {
  components: { WelcomeImg, WelcomeButtons },
  name: "Welcome",
};
</script>
