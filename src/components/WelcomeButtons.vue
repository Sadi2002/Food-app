<template>
  <div class="form-container">
    <form>
      <button @click.prevent="signup" class="signup">Zarejestruj się</button>
      <button @click.prevent="signin" class="signin">Zaloguj się</button>
    </form>
    <SignUp :showModalUp="showModalUp" @switch-modal="switchModal" />
    <SignIn
      @login="enterChat"
      :showModalIn="showModalIn"
      @switch-modal="switchModal"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import SignUp from "./SignUp.vue";
import SignIn from "./SignIn.vue";
import { useRouter } from "vue-router";

export default {
  components: { SignUp, SignIn },
  setup() {
    const showModalUp = ref(false);
    const showModalIn = ref(false);

    const router = useRouter();

    const enterChat = () => {
      router.push({ path: "/recipes" });
    };

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
      enterChat,
    };
  },
};
</script>

<style></style>
