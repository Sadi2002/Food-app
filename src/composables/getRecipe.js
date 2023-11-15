import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const getRecipe = (id) => {
  const recipes = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("recipes").doc(id).get();

      recipes.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  };

  return { recipes, error, load };
};

export { getRecipe };
