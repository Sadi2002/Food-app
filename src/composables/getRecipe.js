import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const getRecipe = (id) => {
  const recipe = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("recipes").doc(id).get();

      recipe.value = { ...res.data(), id: res.id };
      console.log(recipe.value);
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  };

  return { recipe, error, load };
};

export { getRecipe };
