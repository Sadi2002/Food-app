<template>
  <div class="form-container">
    <form>
      <button @click.prevent="signup" class="signup">Zarejestruj się</button>
      <button @click.prevent="signin" class="signin">Zaloguj się</button>
    </form>
    <SignUp :showModalUp="showModalUp" @switch-modal="switchModal" />
    <SignIn :showModalIn="showModalIn" @switch-modal="switchModal" />
  </div>
</template>

<script>
import { ref } from "vue";
import SignUp from "./SignUp.vue";
import SignIn from "./SignIn.vue";

export default {
  components: { SignUp, SignIn },
  setup() {
    const showModalUp = ref(false);
    const showModalIn = ref(false);

    const signup = () => {
      showModalUp.value = true;
    };

    const signin = () => {
      showModalIn.value = true;
    };

    const switchModal = (modalType) => {
      if (modalType === "signUp") {
        showModalIn.value = false;
        showModalUp.value = true;
      } else if (modalType === "signIn") {
        showModalUp.value = false;
        showModalIn.value = true;
      }
    };

    return {
      signup,
      signin,
      showModalUp,
      showModalIn,
      switchModal,
    };
  },
};
</script>

<style></style>
