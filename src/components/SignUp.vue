<template>
  <div class="sign-up-container" :class="{ active: showModalUp }">
    <div class="sign-up-top">
      <h3 class="sign-up-title">Utwórz konto</h3>
      <span class="sign-up-info">Zarejestruj się, aby kontynuować</span>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="form-box">
        <label>Imię</label>
        <input
          type="text"
          v-model="name"
          required
          placeholder="Wpisz swoje imię"
        />
      </div>
      <div class="form-box">
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          required
          placeholder="Wpisz adres e-mail"
        />
      </div>
      <div class="form-box password">
        <label>Hasło</label>
        <input
          type="password"
          v-model="password"
          required
          placeholder="Wpisz hasło"
        />
      </div>
      <button class="form-sign-up">Zarejestruj się</button>
    </form>
    <span class="already"
      >Masz już konto?
      <span class="colored-green" @click="showSignIn">Zaloguj się</span></span
    >
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignup } from "../composables/useSignup";
export default {
  props: ["showModalUp"],
  setup(props, { emit }) {
    const name = ref("");
    const email = ref("");
    const password = ref("");

    const { error, signup } = useSignup();

    const showSignIn = () => {
      emit("switch-modal", "signIn");
    };

    const handleSubmit = async () => {
      if (!error.value) {
        await signup(name.value, email.value, password.value);
        if (password.value.length < 6) {
          error.value = "Hasło powinno składać się z conajmniej 6 znaków";
        }
        emit("switch-modal", "signIn");
      }
    };

    return {
      name,
      email,
      password,
      showSignIn,
      handleSubmit,
      error,
      signup,
    };
  },
};
</script>

<style scoped>
.sign-up-container {
  height: 0px;
  background-color: #fff;
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

.sign-up-container.active {
  top: -350px;
  height: 600px;
}

.sign-up-title {
  text-align: left;
  font-weight: bold;
}

.sign-up-info {
  font-size: 14px;
  color: rgb(156, 156, 156);
}

.sign-up-container form {
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

.form-sign-up {
  width: 100%;
  background-color: #5cc981;
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
  background-color: #3b3b3b;
}

.password {
  position: relative;
}
</style>
