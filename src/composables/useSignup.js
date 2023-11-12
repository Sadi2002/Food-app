import { projectAuth, projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const signup = async (name, email, password) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Nie można ukończyć rejestracji");
    }
    await res.user.updateProfile({ displayName: name });
    error.value = null;

    console.log(res.user);

    return res;
  } catch (err) {
    console.log(err.message);
  }
};

const useSignup = () => {
  return { error, signup };
};

export { useSignup };
