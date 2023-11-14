import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getRecipes = () => {
  const recipes = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("recipes").get();

      recipes.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return { recipes, error, load };
};

export { getRecipes };
