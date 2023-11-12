import { projectAuth, projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((currentUser) => {
  console.log(currentUser);
  user.value = currentUser;
});

const getUser = () => {
  return { user };
};

export { getUser };
