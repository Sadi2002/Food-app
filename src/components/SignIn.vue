<template>
  <div class="sign-in-container" :class="{ active: showModalIn }">
    <div class="sign-in-top">
      <h3 class="sign-in-title">Zaloguj się</h3>
      <span class="sign-in-info">Zaloguj się, aby kontynuować</span>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="form-box">
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          required
          placeholder="Wpisz adres e-mail"
        />
      </div>
      <div class="form-box">
        <label>Hasło</label>
        <input
          type="password"
          v-model="password"
          required
          placeholder="Wpisz hasło"
        />
      </div>
      <button class="form-sign-in">Zaloguj się</button>
    </form>
    <span class="already"
      >Nie masz jeszcze konta?
      <span class="colored-green" @click="showSignUp"
        >Zarejestruj się</span
      ></span
    >
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignin } from "../composables/useSignin";
import { useRouter } from "vue-router";

export default {
  props: ["showModalIn"],
  setup(props, { emit }) {
    const email = ref("");
    const password = ref("");

    const router = useRouter();

    const { error, signin } = useSignin();

    const showSignUp = () => {
      emit("switch-modal", "signUp");
    };

    const handleSubmit = async () => {
      await signin(email.value, password.value);
      if (!error.value) {
        emit("login");
      }
    };

    return {
      email,
      password,
      showSignUp,
      handleSubmit,
      error,
      signin,
    };
  },
};
</script>

<style scoped>
.sign-in-container {
  height: 0px;
  background-color: white;
  width: 100%;
  position: fixed;
  border-radius: 50px 50px 0 0;
  top: 100%;
  transition: all 0.8s;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto", sans-serif;
}

.sign-in-container.active {
  top: -280px;
  height: 530px;
}

.sign-in-title {
  text-align: left;
  font-weight: bold;
}

.sign-in-info {
  font-size: 14px;
  color: rgb(156, 156, 156);
}

.sign-in-container form {
  width: 100%;
  margin-top: 50px;
  min-height: auto;
}

form .form-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
}

input {
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 1px solid rgb(185, 185, 185);
  padding: 0 20px;
}

label {
  font-weight: bold;
  font-size: 16px;
}

.form-sign-in {
  width: 100%;
  background-color: #3b3b3b;
  color: white;
  font-size: 20px;
  transition: all 0.3s;
}

.already {
  margin-top: 20px;
  display: block;
  text-align: center;
  width: 100%;
}

.form-container form button:hover {
  background-color: #5cc981;
}
</style>
