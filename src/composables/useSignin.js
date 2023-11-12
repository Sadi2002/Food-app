import { projectAuth, projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const signin = async (email, password) => {
  error.value = null;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;

    if (!res) {
      throw new Error("Błędny email lub hasło");
    }
  } catch (err) {
    error.value = err.message;
  }
};

const useSignin = () => {
  return { error, signin };
};

export { useSignin };
